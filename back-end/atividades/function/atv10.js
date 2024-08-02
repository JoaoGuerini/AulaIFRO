/*Desenvolva uma função chamada validarCPF que recebe
um CPF como uma string numérica e verifica se ele é válido de
acordo com as regras de validação de CPF. A função deve
retornar true se o CPF for válido e false caso contrário.*/
import input from 'readline-sync'

function validarCPF(cpf){
    if(cpf.length !== 11){
        return 'Tamanho errado'
    }
    var soma = 0;

    for (var i = 0; i < 9; i++){
        soma += cpf.charAt(i) * (10 - i )
    }
    
    var resto = soma%11;
    let dv1 = (resto < 2)?0 : 11-resto

    if(dv1 != cpf.charAt(9) ){
        return 'dv1 errada'
    }

    soma = 0;

    for(var i = 0; i<10; i++){
        soma += cpf.charAt(i) * (11 - i)
    }
    resto = soma % 11
    var dv2 = (resto<2)? 0 : 11-resto

    if(dv2 != cpf.charAt(10)){
        return 'dv2 errada'
    }

    return true
}

console.log(validarCPF(input.question('Digite somente os numeros do cpf: ')))