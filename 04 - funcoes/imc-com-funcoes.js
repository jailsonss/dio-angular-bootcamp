function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if (imc < 18.5){
        return 'Seu IMC é '+ imc +'. Logo, você está ABAIXO DO PESO.';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Seu IMC é '+ imc +'. Logo, você está com PESO NORMAL.';
    } else if (imc >= 25 && imc < 30) {
        return'Seu IMC é '+ imc +'. Logo, você está ACIMA DO PESO.';
    } else if (imc >= 30 && imc <= 40) {
        return 'Seu IMC é '+ imc +'. Logo, você está OBESO.';
    } else {
        return 'Seu IMC é '+ imc +'. Logo, você está com PESO NORMAL.';
    }
}

// MAIN
(function (){
    const peso = 55;
    const altura = 1.72;
    // const imc = peso / (altura * altura);
    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
})();