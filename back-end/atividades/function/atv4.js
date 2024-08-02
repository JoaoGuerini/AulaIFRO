/*04. Crie uma função que receba um valor e uma
porcentagem como parâmetros. A função deve retornar o
valor acrescido da porcentagem indicada.*/

import input from 'readline-sync';

function acresNormal(num, porcentagem){
    return num + (num * (porcentagem/100))
}

console.log(acresNormal(input.questionInt('acresNormal Numero: '), input.questionInt('acresNormal Porcentagem: ')))

const acresExpressao = function(num, porcentagem){
    return num + (num * (porcentagem/100))
}

console.log(acresExpressao(input.questionInt('acresExpressao Numero: '), input.questionInt('acresExpressao Porcentagem: ')))

const acresSeta = (num, porcentagem) => num + ( num * (porcentagem/100))

console.log(acresSeta(input.questionInt('acresSeta Numero: '), input.questionInt('acresSeta Porcentagem: ')))