import input from 'readline-sync';

let numAlunos = input.questionInt('Informe a quantidade de alunos: ');
let contp = 1;
let mediaTurma = 0;

while(contp <= numAlunos){
    let notas1 = input.questionInt(`Informe a nota do primeiro bimestre do aluno ${contp }: `)
    let notas2 = input.questionInt(`Informe a nota do segundo bimestre do aluno ${contp}: `)
    let notas3 = input.questionInt(`Informe a nota do terceiro bimestre do aluno ${contp}: `)
    let notas4 = input.questionInt(`Informe a nota do quarto bimestre do aluno ${contp}: `)

    let mediaAluno = (notas1 + notas2 + notas3 + notas4) / 4;
    console.log(`Média do Aluno: ${mediaAluno}`);
    
    
    mediaTurma += mediaAluno;
    console.log(`${mediaTurma}`);
    contp++
}

mediaTurma = mediaTurma / numAlunos;
console.log(`Média da turma: ${mediaTurma}`)

