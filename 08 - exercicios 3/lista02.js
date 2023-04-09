// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrando.

const numeros = [];

numeros.push(1);
numeros.push(2);
numeros.push(3);
numeros.push(4);
numeros.push(5);
numeros.push(6);
numeros.push(7);
numeros.push(8);
numeros.push(9);

console.log('Números pares da lista:');
for (let i = 0; i < numeros.length; i++) {
    let par = numeros[i];
    
    if (par % 2 === 0) {
        console.log(par);
    }
}