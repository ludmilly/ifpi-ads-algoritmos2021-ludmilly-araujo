const input = require('prompt-sync')()

// Entrada
const lado = Number(input('Lado (cm): '))

// Processamento
const área = lado * lado

// Saída
console.log('A área do quadrado é', área)