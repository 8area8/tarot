#!/usr/bin/env node
/**
 * Hook Claude Code (PostToolUse) : après une édition de fichier `.astro`, lance le
 * garde-fou « styles scopés vs DOM JS ». Si un piège est détecté, sort en code 2
 * pour que le message remonte au modèle (et l'invite à corriger tout de suite).
 *
 * Lit le JSON du hook sur stdin, en extrait `tool_input.file_path`.
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (d) => (input += d));
process.stdin.on('end', () => {
  let fp = '';
  try {
    fp = JSON.parse(input)?.tool_input?.file_path ?? '';
  } catch {
    /* entrée inattendue → on ne bloque rien */
  }
  if (!fp.endsWith('.astro')) process.exit(0);

  const checker = fileURLToPath(new URL('./check-scoped-styles.mjs', import.meta.url));
  const res = spawnSync(process.execPath, [checker, fp], { encoding: 'utf8' });
  if (res.status !== 0) {
    process.stderr.write((res.stdout ?? '') + (res.stderr ?? ''));
    process.exit(2); // code 2 → stderr renvoyé au modèle
  }
  process.exit(0);
});
