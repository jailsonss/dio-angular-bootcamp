
const entradas = [5, 50, 10, 98, 23, 109, 2096, 2096.0001];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };