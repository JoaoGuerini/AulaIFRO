/*02. Crie uma função que receba um número como
parâmetro e verifique se ele é par ou ímpar. Retorne uma
string.*/
import input from 'readline-sync'

function normal(num){
    if (num % 2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(normal(input.questionInt('Normal: ')))

const expressao = function(num){
    if (num % 2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(expressao(input.question('Expressao: ')))

const seta = (num) =>{
    if(num % 2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(seta(input.questionInt('Seta: ')))