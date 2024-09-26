import input, { question } from 'readline-sync';

let nome = input.question('da um nome ai: ')

function upCase(string) {
    return string.toUpperCase()
}

console.log(upCase(nome))

const caseUP = function(string) {
    return string.toUpperCase()
}

console.log(caseUP(nome))

const outroCase = (string) => {
    return string.toUpperCase()
}

console.log(outroCase(nome))