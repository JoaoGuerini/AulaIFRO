 /*01. Crie uma função que receba uma string como
parâmetro e retorne a mesma string com todas as letras
em caixa alta.*/

import input from 'readline-sync'

function upper(string) {
    return string.toUpperCase()
};

console.log(upper(input.question('upper: ')))

var uppercase = function (string){
    return string.toUpperCase()
}

console.log(uppercase(input.question('uppercase: ')))

const touppercase = (string) => string.toUpperCase()

console.log(touppercase(input.question('touppercase: ')))