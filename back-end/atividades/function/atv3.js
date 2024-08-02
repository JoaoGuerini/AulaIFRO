/*03. Crie uma função que receba dois números como
parâmetros e retorne a soma deles*/

import input from 'readline-sync';

function normalSoma(num1, num2){
    return num1+num2
}

console.log(normalSoma(input.questionInt('NormalSoma num1: '), input.questionInt('NormalSoma num2:')))

const expressaoSoma = function(num1, num2){
    return num1+num2
}

console.log(expressaoSoma(input.questionInt('ExpressaoSoma num1: '), input.questionInt('ExpressaoSoma num2: ')))

const setaSoma = (num1, num2) => num1+num2

console.log(setaSoma(input.questionInt('SetaSoma num1: '),input.questionInt('SetaSoma num: ')))