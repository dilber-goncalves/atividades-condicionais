const rendaMensal = 400000;
const mesesDecorridos = 12;
const totalPago = 2000000;

if(mesesDecorridos > 60){
    console.log('Voce não deve nada');
}else if(rendaMensal < 200000){
    console.log('O valor da parcela é R$ 0. Nenhum valor será cobrado pois a renda é menor');
}else if(totalPago >= 1800000){
    console.log('Voce já quitou todas as parcelas');
}else{
    const parcela = (rendaMensal / 100) * 18 /100; // colocar em rais
    console.log(`O valor da parcela deste mes é de R$ ${parcela} reais.`);
}