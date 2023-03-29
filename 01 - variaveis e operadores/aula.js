/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:

1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distência em KM da viagem;

*/

const preco = 5.79;
const kmPorLitros = 10;
const distancia = 100;

const litrosGastos = distancia / kmPorLitros;

console.log('Quantos litros eu gastei nessa viagem? R: '+ litrosGastos +' litros');

const custoViagem = litrosGastos * preco;

console.log('Quanto foi gasto em R$ nessa viagem? R: R$'+ custoViagem.toFixed(2));