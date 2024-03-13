const tipoPagamento = "dinheiro";
const valorDoProduto = 130.00;
let valorComDesconto = 0;

if(tipoPagamento === "credito"){
    valorComDesconto = valorDoProduto * 95/100;
}else if(tipoPagamento === "cheque"){
    valorComDesconto = valorDoProduto * 97/100;
}else{
    valorComDesconto = valorDoProduto * 90/100;
}

console.log(`Valor a ser pago: R$ ${valorComDesconto.toFixed(2)} reais`);