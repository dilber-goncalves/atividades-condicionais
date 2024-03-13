const aposentada = false;
const portadorDeDoenca = false;
const totalRendimentos = 3000000; //centavos

if(aposentada || portadorDeDoenca){
    console.log("ISENTA");
}else if(totalRendimentos < 2855970){
    console.log("VAZA LEAO, já está difícil sem voce!");
}else{
    console.log("PEGA LEAO");
}