import input from 'readline-sync';

let categoria = input.question('Categorias:\nA\nB\nC\nD\nDigite sua categoria:').toLowerCase()
let salario = input.questionFloat('Insira seu salário atual: ')

let lista = ['a' ,'b' ,'c','d']

for (var i = 0; i<lista.length; i++){
    if(lista[i] == categoria) console.log('correto')
}
switch (categoria) {
    case 'a':
        var bonifacao = ((5/100) * salario) + salario
        console.log(`Seu salário atual com a sua nova bonificação é de ${bonifacao}`)
        break
    case 'b':
        var bonifacao = ((10/100) * salario) + salario
        console.log(`Seu salário atual com a sua nova bonificação é de ${bonifacao}`)
        break
    case 'c':
        var bonifacao = ((15/100) * salario) + salario
        console.log(`Seu salário atual com a sua nova bonificação é de ${bonifacao}`)
        break
    case 'd':
        var bonifacao = ((20/100) * salario) + salario 
        console.log(`Seu salário atual com a sua nova bonificação é de ${bonifacao}`)
        break
}

