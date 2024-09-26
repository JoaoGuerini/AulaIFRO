import input from 'readline-sync';
//-----------TESTES INPUT ----------------------
// let nome = input.question('Tu da o rabo?');
// console.log(`oi pai ${nome}`);

// let x = input.questionInt('X: ');
// let y = input.questionInt('Y: ');


//let x = input.question('x:');
//let y = input.question('y: ');

//let email= input.questionEMail('digita email ai');
//let senha = input.questionNewPassword('Senha')

//let total = console.log(`${Number(x) + Number(y)}`)
//-----------OPERADORES TESTES ----------------------
let idade =19 
if (idade >=18) {
    console.log('Maior de idade')
}
else{
    console.log('Menor de idade')
}

let a = (idade >=18) && console.log('Maiior de idade') //SÓ O IF --- CURTO CIRCUITO
console.log(a)

let mensagem = idade>=18 ? 'maior de idade' : 'Menos de idade'; //IF E ELSE --- OPERADOR TERNARIO
console.log(mensagem)

//-------------SWITCH CASE------------------

