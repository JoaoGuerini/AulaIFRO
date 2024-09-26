/*07. Desenvolva uma função que converta
uma temperatura de Celsius para Fahrenheit.
A função deve receber a temperatura em
Celsius como parâmetro e retornar a
temperatura convertida*/
import input from 'readline-sync';

function normalConversao(celsius){
    return (celsius * (9/5)) + 32
}

console.log(normalConversao(input.questionFloat('Informe a temperatura em Celsius: ')))

const expressaoConversao = function(celsius){
    return (celsius * (9/5)) + 32
}

console.log(expressaoConversao(input.questionFloat('Informe a temperatura em Celsius: ')))

const setaConversao = (celsius) => (celsius * (9/5)) + 32

console.log(setaConversao(input.questionFloat('Informe a temperatura em Celsius: ')))