class imovel {
    quartos;
    tipo;
    endereco;
    
    exibirInformacoes() {
        return `Uma ${this.tipo} com ${this.quartos} quartos no endereço: ${this.endereco}`;
    }
}

const casa = new imovel();
casa.quartos = 4;
casa.tipo = 'Casa';
casa.endereco = "Rua da Amizade, 789 - Bairro Alegre";
console.log(casa.exibirInformacoes());


const Apartamento = new imovel()
Apartamento.quartos = 2
Apartamento.tipo = 'Apartamento'
Apartamento.endereco =  "Avenida da Paz, 123 - Centro"
console.log(Apartamento.exibirInformacoes())

class Veiculo{
    marca;
    modelo;
    ano;
    exebirDetalhes () {
        return `Um carro da marca ${this.marca}, do modelo ${this.modelo} do ano de ${this.ano}.`
    }
}

const Carro = new Veiculo()
Carro.marca = 'Toyota'
Carro.modelo = 'Corolla'
Carro.ano = 2022
console.log(Carro.exebirDetalhes())

const Motocicleta = new Veiculo()
Motocicleta.marca = 'Honda'
Motocicleta.modelo = 'CBR 600RR'
Motocicleta.ano = 2021
console.log(Motocicleta.exebirDetalhes())

