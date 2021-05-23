const input = require('prompt-sync')()

// Entrada
const velocidade_km = Number(input('Velocidade (k/m): '))

// Processamento
const velocidade_ms = velocidade_km / 3.6

// Saída
console.log('A velocidade', velocidade_km, 'k/m')
console.log('é igual a', velocidade_ms, 'm/s')