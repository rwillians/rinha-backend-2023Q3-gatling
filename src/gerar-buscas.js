#! /usr/bin/env node

const { gerarTermoDeBusca } = require('./gerador-de-carga.js')

// `scripts/gerar-pessas 50000` gera 50k termos de busca
// `scripts/gerar-pessas 10` gera 10 termos de busca
// `scripts/gerar-pessas` gera 100k termos de busca (padrão)
const max = parseInt(process.argv.slice(2)[0] || '100000');

process.stdout.write('t\n')

for (let i = 0; i < max; i++) {
  process.stdout.write(gerarTermoDeBusca() + '\n')
}
