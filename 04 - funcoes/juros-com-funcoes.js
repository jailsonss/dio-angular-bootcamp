/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar a o cálculo adequado.

Código Condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preco normal de etiqueta mais juros de 10%;

*/
function aplicarDesconto(valor, deconto){
    return valor - (valor * desconto);
}

const precoEtiqueta = 100;
const formaDePagamento = 1;

function pagamento(){
    if (formaDePagamento === 1){
        const precoFinal = precoEtiqueta - (precoEtiqueta * 0.1);
        return 'A forma de pagamento escolhida foi À vista Débito, e o valor final da compra foi de R$'+ precoFinal.toFixed(2);
    } else if (formaDePagamento === 2){
        const precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
        return 'A forma de pagamento escolhida foi À vista no Dinheiro ou PIX, e o valor final da compra foi de R$'+ precoFinal.toFixed(2);
    } else if (formaDePagamento === 3) {
        return 'A forma de pagamento escolhida foi parcelado em duas vezes, e o valor final da compra foi de R$'+ precoEtiqueta.toFixed(2);
    } else if (formaDePagamento === 4) {
        const precoFinal = precoEtiqueta + (precoEtiqueta * 0.10);
        return 'A forma de pagamento escolhida foi Parcelado acima de duas vezes, e o valor final da compra foi de R$'+ precoFinal.toFixed(2);
    } else {
        return 'Forma de pagamento inválida';
    }
}
