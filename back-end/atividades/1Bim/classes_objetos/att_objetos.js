let apartamento={
    quartos: 2,
    tipo: 'Apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
};

let produtoEmbalado = {
    nome: 'Laptod HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500.00,
};


console.log(`Apartamento com ${apartamento.quartos} quartos, localizado no ${apartamento.andar} andar da ${apartamento.endereco}.`)

console.log(`O Produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}, está à venda por R$ ${produtoEmbalado.preco}.`)

