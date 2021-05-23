const input = require('prompt-sync')()

// Entrada
const valor = Number(input('Valor(kg): '))

// Processamento
const valor_g = valor * 1000

// Saída
console.log('O valor em gramas é', valor_g)