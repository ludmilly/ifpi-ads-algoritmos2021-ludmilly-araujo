const input = require('prompt-sync')()

// Entrada
const valor = Number(input('Valor(F): '))

// Processamento
const valor_c = (5 * valor - 160) / 9

// Saída
console.log('O valor em celsius é', valor_c)