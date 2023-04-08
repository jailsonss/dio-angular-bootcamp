// Crie um programa que dado um número imprima a sua tabuada

const tabuada = [9];

// Tabuada de adição
console.log('Tabuada de adição do número ' + tabuada[0] + ':');
for (let i = 1; i <= 10; i++) {
    console.log(
        i + ' + ' + tabuada[0] + ' = ' + (tabuada[0] + i)
    );
}

// Tabuada de subtração
console.log('Tabuada de subtração do número ' + tabuada[0] + ':');
for (let i = 1; i < 10; i++) {
    console.log(
        (tabuada[0] + i) + ' - ' + tabuada[0] + ' = ' + ((tabuada[0] + i) - tabuada[0])
    );
}

// Tabuada de multiplicação
console.log('Tabuada de multiplicação do número ' + tabuada[0] + ':');
for (let i = 1; i <= 10; i++) {
    console.log(
        i + ' x ' + tabuada[0] + ' = ' + tabuada[0] * i
    );
}

// Tabuada de divisão
console.log('Tabuada de divisão do número ' + tabuada[0] + ':');
for (let i = 1; i <= 10; i++) {
    console.log(
        tabuada[0] * i + ' : ' + tabuada[0] + ' = ' + (tabuada[0] * i) / tabuada[0]
    );
}