/*05. Desenvolva uma função que calcule o valor de um
produto com desconto. A função deve receber o valor
original do produto e o percentual de desconto como
parâmetros, e retornar o valor com desconto aplicado.
Utilize essa função para calcular o valor final de
diferentes produtos.*/

import input from 'readline-sync'

function descontoNormal(nome, valor, desconto){
    return (`O produto ${nome} de valor ${valor.toFixed(2)} passou para o valor de ${valor - (valor * (desconto/100)).toFixed()} depois do desconto de ${desconto}%.`)
}

console.log(descontoNormal(input.question('Nome: '), input.questionFloat('Valor: '), input.questionInt('Desconto: ')))

const descontoExpressao = function(nome, valor, desconto){
    return (`O produto ${nome} de valor ${valor.toFixed(2)} passou para o valor de ${valor - (valor * (desconto/100)).toFixed()} depois do desconto de ${desconto}%.`)
}

console.log(descontoExpressao(input.question('Nome: '), input.questionFloat('Valor: '), input.questionInt('Desconto: ')))

const descontoSeta = (nome, valor, desconto) => (`O produto ${nome} de valor ${valor.toFixed(2)} passou para o valor de ${valor - (valor * (desconto/100)).toFixed()} depois do desconto de ${desconto}%.`)

console.log(descontoSeta(input.question('Nome: '), input.questionFloat('Valor: '), input.questionInt('Desconto: ')))