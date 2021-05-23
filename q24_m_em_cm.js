const input = require('prompt-sync')()

// Entrada
const valor = Number(input('Valor(m): '))

// Processamento
const valor_cm = valor * 100

// Saída
console.log('O valor em centímetros é', valor_cm)