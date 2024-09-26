import input from 'readline-sync';

let num1 = input.questionInt('Da um int ai: ')
let num2 = input.questionInt('Da um int dnv ai: ')

function boSoma(num1, num2) {
    return num1+num2
}

console.log(boSoma(num1, num2))

const somarDenovo = function(num1, num2) {
    return num1+num2
}

console.log(somarDenovo(num1, num2))

const outraSoma = (num1, num2) => {return num1+num2}

console.log(outraSoma(num1, num2))