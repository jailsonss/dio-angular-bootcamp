/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O ipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprime no console o valor que será gasto para realizar esta viagem.

*/

const etanolPreco = 5.79;
const gasolinaPreco = 6.66;
const kmPorLitros = 10;
const distancia = 100;

let tipoCombustivel = 'Etanol';

const litrosGastos = distancia / kmPorLitros;

// console.log('Quantos litros eu gastei nessa viagem? R: '+ litrosGastos +' litros');

// console.log('Quanto foi gasto em R$ nessa viagem? R: R$'+ custoViagem.toFixed(2));

if (tipoCombustivel === 'Etanol') {

    const custoViagem = litrosGastos * etanolPreco;

    console.log('O tipo do combustível utilizado foi o Etanol e o valor da viagem foi de R$'+ custoViagem.toFixed(2));

} else {
    const custoViagem = litrosGastos * gasolinaPreco;

    console.log('O tipo de combustível utilizado foi a Gasolina, e o valor da viagem foi de R$'+ custoViagem.toFixed(2));
}

// if (tipoCombustivel === 'Etanol'){
//     var custoViagem = litrosGastos * etanolPreco;
// } else {
//     var custoViagem = litrosGastos * gasolinaPreco;
// }

// console.log('O tipo de combustível utilizado foi a '+ tipoCombustivel +', e o valor da viagem foi de R$'+ custoViagem.toFixed(2));
