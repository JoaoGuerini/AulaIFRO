import input from 'readline-sync';

let numero = input.questionInt('Informe um número inteiro');
let cont = 0 

while (cont<=10){
    let resultado = numero * cont
    console.log(`${numero} x ${cont} = ${resultado} `)
    cont++
}
