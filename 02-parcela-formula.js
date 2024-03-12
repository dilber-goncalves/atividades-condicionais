const valorDaCompra = 87;
const numeroDeParcelas = 8;

if (numeroDeParcelas === 1) {
    //a vista
    const desconto = valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Voce deve pagar R$ ${valorAPagar.toFixed(2)}, pois à vista possui 10% de desconto.`);
}else if(numeroDeParcelas >= 2 && numeroDeParcelas <=6){
    //parcelado
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de parcelas de R$ ${valorDaParcela.toFixed(2)}.`)
}else if(numeroDeParcelas >= 7 && numeroDeParcelas <= 12){
    //parcelado com juros
    const valorAPagarComJuros = (valorDaCompra * (1+ 1/100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Voce deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros} devido a incidencia de juros.`);
}else{
    //numero de parcelas inválido
    console.log("Numero de parcelas inválido");
}