/*11. Escreva uma função que informe o retorno de um
investimento (montante) com base nos valores do capital
inicial, tempo em meses e taxa de juros mensal, fornecidos
pelo usuário.*/
import input from 'readline-sync';

function investimento(c, tempo, jurosM){
    let montante = 0;
    montante = c * (1+ jurosM/100)**tempo
    return montante.toFixed(2)
}

let capitalInicial = input.questionFloat('Informe o seu Capital IniciaL: ')
let tempos = input.questionInt('Informe o tempo de investimento em Meses: ')
let jurosMensal = input.questionFloat('Informe o Juros mensal(a.m): ')

console.log(investimento(capitalInicial, tempos, jurosMensal))