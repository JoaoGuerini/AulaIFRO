/*06. Desenvolva uma função que calcule a
área de um círculo. A função deve receber o
raio como parâmetro e retornar a área
calculada.*/
import input from 'readline-sync';

let pi = 3.14;

function areaNormal(raio){
    return pi * (raio**2)
}

console.log(areaNormal(input.questionFloat('Valor do raio: ')))

const areaExpressao = function(raio){
    return pi * (raio**2)
}

console.log(areaExpressao(input.questionFloat('Valor do raio: ')))

const areaSeta = (raio) => pi * (raio**2)

console.log(areaSeta(input.questionFloat('Valor do raio: ')))