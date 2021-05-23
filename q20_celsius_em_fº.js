const input = require('prompt-sync')()

// Entrada
const valor = Number(input('Valor(Celsius): '))

// Processamento
const valor_f = (9 * valor + 160) / 5

// Saída
console.log('O valor em fahrenheit é', valor_f)