/*Crie uma função que valide se uma senha atende aos
critérios estabelecidos, como ter no mínimo 8 caracteres, pelo
menos uma letra maiúscula, pelo menos uma letra minúscula e
pelo menos um caractere especial*/

import input from 'readline-sync';
const especiais = /\W|_/;
const maiusculas = /[A-Z]/
const minuscula = /[a-z]/

const naovalida = 'Senha nao valida'

function verificarNormal(string){
    if(especiais.test(string)){
        if(string.length >= 12){
            if(maiusculas.test(string)){
                if(minuscula.test(string)){
                    return 'Senha válida'
                }
                else{
                    return naovalida
                }
            }
            else{
                return naovalida
            }
        }
        else{
            return naovalida
        }
    }
    else{
        return naovalida
    }
}

console.log(verificarNormal(input.question('Aqui')))