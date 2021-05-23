const input = require('prompt-sync')()

// Entrada
const dólar = Number(input('Dólar (d): '))

// Processamento
const real = dólar * 5.37

// Saída
console.log('O preço em real é igual a', real)