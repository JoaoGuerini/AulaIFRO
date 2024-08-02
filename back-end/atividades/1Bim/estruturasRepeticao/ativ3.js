import input from 'readline-sync';

let NumAleatorio = Math.ceil(Math.random() * 100);
let palpite;
let tentativas = 0;


do{
    palpite = input.questionInt('De o seu palpite: ');
    if (palpite < NumAleatorio){
        console.log('Chutou baixo.');
    }
    else if(palpite > NumAleatorio){
        console.log('Chutou alto.');
    }

    tentativas ++
} while(palpite < NumAleatorio | palpite>NumAleatorio);

console.log(`Parabéns!! O número correto era ${NumAleatorio}\nQuantidade de tentativas: ${tentativas}`)