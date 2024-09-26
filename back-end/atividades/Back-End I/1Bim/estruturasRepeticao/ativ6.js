let aluno = {
    nome:'Joao Pedro Guerini Pasquali',
    email:'joaopedrogp83@gmail.com',
    idade:16,
    cidade: 'Vilhena',
    estado: 'Rondonia',
    telefone: 69984570725
};

for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`);
}