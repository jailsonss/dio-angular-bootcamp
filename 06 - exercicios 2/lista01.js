/*

    1- Crie uma lista para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const fusca = new Carro('Volkswagen', 'vermelho', 1/10);

console.log('Nessa viagem você gastou R$'+fusca.calcularGastoDePercurso(100, 5).toFixed(2));