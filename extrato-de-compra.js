const valorProduto = 1000.00;
const qntParcelas = 10;
const valorPago = 300.00
const valorParcelas = (valorProduto / qntParcelas);
const parcelasPagas = valorPago / valorParcelas;

console.log(`Restam ${qntParcelas - parcelasPagas} parcelas de ${valorParcelas.toFixed(2)}`);

//