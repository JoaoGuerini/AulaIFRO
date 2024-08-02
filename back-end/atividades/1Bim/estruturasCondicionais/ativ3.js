import input from 'readline-sync';

let operacao = input.question('Solicite sua operação:\nAdicao\nSubtracao\nMultiplicacao\nDivisao\nR:').toLowerCase()
let x = input.questionInt('Insira um numero X inteiro: ')
let y = input.questionInt('Insira um numero Y inteiro: ')

if (x > 0 && y > 0){

    switch (operacao){
        case 'adicao':
            console.log(`Resultado: ${x+y}`)
            break
        case 'subtracao':
            console.log(`Resultado: ${x-y}`)
            break
        case 'multiplicacao':
            console.log(`Resultado: ${x*y}`)
            break
        case 'divisao':
            console.log(`Resultado: ${x/y}`)
            break
        default:
            console.log('Operação Inválida')
    }
}