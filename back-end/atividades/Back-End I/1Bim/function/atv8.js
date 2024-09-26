/*08. Crie uma função que calcula o IMC. A
função deve receber a altura e o peso como
parâmetros e retornar o IMC*/
let imc;
let classific;

import input from 'readline-sync';

function normalImc(altura, peso){
    return imc = peso / (altura**2)
}
    

const expressaoImc = function(altura, peso){
    return imc = peso / (altura**2)
}

const setaImc = (altura, peso) => imc = peso / (altura**2)

function verificar(param){
    if(param<0){
        classific = 'Impossivel'
    }
    else if (param < 18.5){
        classific = 'Magreza'
    }

    else if(param >= 18.5 && param <= 24.9  ){
        classific = 'Normal'
    }

    else if(param >= 25.0 && param <= 29.9){
        classific = 'Sobrepeso'
    }

    else if(param >= 30.0 && param <= 39.9){
        classific = 'Obesidade'
    }

    else if(param >=40){
         classific = 'Obresidade Grave'
    }

    return (`Sua classificação de IMC é: ${classific}`)
}


var imc1 = normalImc(input.questionFloat('Informe sua Altura: '), input.questionFloat('Informe o seu peso: ')).toFixed(1)

/*let imc2 = console.log(expressaoImc(input.questionFloat('Informe sua Altura: '), input.questionFloat('Informe o seu peso: ')).toFixed(2))

let imc3 = console.log(setaImc(input.questionFloat('Informe sua Altura: '), input.questionFloat('Informe o seu peso: ')).toFixed(2))*/

console.log(verificar(parseFloat(imc1)))