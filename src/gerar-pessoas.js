#! /usr/bin/env node

const { gerarPessoa } = require('./gerador-de-carga.js')

// `scripts/gerar-pessas 50000` gera 50k pessoas
// `scripts/gerar-pessas 10` gera 10 pessoas
// `scripts/gerar-pessas` gera 250k pessoas (padrão)
const max = parseInt(process.argv.slice(2)[0] || '250000');

process.stdout.write('payload\n')

for (let i = 0; i < max; i++) {
  process.stdout.write(JSON.stringify(gerarPessoa()) + '\n')
}
