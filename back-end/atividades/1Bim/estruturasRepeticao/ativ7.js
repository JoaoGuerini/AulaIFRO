let moradiasArray = [
    {id:1, tipo:'Casa', endereco: 'Rua da Felicidade', estado:'Aluga-se'},
    {id:2, tipo:'Apartamento', endereco: 'Rua do Amor', estado:'Vende-se'},
    {id:3, tipo:'Casa', endereco: 'Rua da Paixão', estado:'Aluga-se'},
    {id:4, tipo:'Apartamento', endereco: 'Rua da Tristeza', estado:'Aluga-se'},
    {id:5, tipo:'Apartamento', endereco: 'Rua da Programação', estado:'Aluga-se'},
    {id:6, tipo:'Casa', endereco: 'Rua do Guerini', estado:'Vende-se'},
    {id:7, tipo:'Casa', endereco: 'Rua do Pasquali', estado:'Aluga-se'},
    {id:8, tipo:'Apartamento', endereco: 'Rua da Informática', estado:'Vende-se'},
    {id:9, tipo:'Casa', endereco: 'Rua do Estágio', estado:'Vende-se'},
    {id:10, tipo:'Casa', endereco: 'Rua da Consagração', estado:'Alugua-se'},
]

let classesTerraria = [
    'mago', 'ranged', 'melee', 'summoner'
]

for (let imovel of moradiasArray) {
    console.log(`ID do Imovel: ${imovel.id} - Tipo do Imovel: ${imovel.tipo} - Endereço do Imovel: ${imovel.endereco} - Estado de Compra do Imovel: ${imovel.estado}`)
    
}

for (let terraria of classesTerraria){
    console.log(`Classes: ${terraria} `)
}