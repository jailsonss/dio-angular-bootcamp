function meuNome(nome){
    console.log('Meu Nome é ' + nome);
}

meuNome('Jailson');

function maioridade(idade){
    if (idade < 18){
        return 'Você tem ' + idade + ' anos, e é MENOR de idade.';
    } else {
        return 'Você tem ' + idade + ' anos, e é MAIOR de idade.';
    }
}

(function (){
    console.log(maioridade(19));
})();
