import input from 'readline-sync';
let num = input.questionInt('Da um numero int ai: ')
function isImpar(num) {
    if (num % 2 === 1){
        return 'nao é'
    }
    else{
        return 'é' 
    }        
}

console.log(isImpar(num))

const eImpar = function(num){
    if (num % 2 === 1){
        return 'nao é2'
    }
    else{
        return 'é2' 
    } 
}

console.log(eImpar(num))

const outroImpar = (num) => {
    if (num % 2 === 1){
        return 'nao é3'
    }
    else{
        return 'é3' 
    } 
}

console.log(outroImpar(num))