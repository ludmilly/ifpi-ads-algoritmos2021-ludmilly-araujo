const input = require('prompt-sync')()

// Entrada
const valor = Number(input('Valor(km): '))

// Processamento
const valor_m = valor * 1000

// Saída
console.log('O valor em metros é', valor_m)