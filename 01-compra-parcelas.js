const valorDaCompra = 93;
const numeroDeParcelas = 4;

if (numeroDeParcelas === 1) {
    //a vista
    const desconto = valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Voce deve pagar R$ ${valorAPagar.toFixed(2)}, pois à vista possui 10% de desconto.`);
}else{
    //parcelado
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela.toFixed(2)}`)
}