// const notas = [6, 7.9, 3, 10];

const notas = [];

notas.push(6);
notas.push(7.9);
notas.push(3);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = (soma / notas.length).toFixed(2);

if (media < 6){
    console.log('A sua média foi: ' + media + '.\nVocê foi reprovado.');
} else {
    console.log('A sua média foi: ' + media + '.\nVocê foi aprovado!');
}