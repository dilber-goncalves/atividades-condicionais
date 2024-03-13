const ladoA = 7;
const ladoB = 7;
if(ladoA <= 6 && ladoB <= 6){
    console.log(`${ladoA} e ${ladoB} é uma bucha?`)
    if(ladoA === ladoB){
        console.log("SIM");
        if(ladoA === 0){
            console.log("Bucha de BRANCO");
        }else if(ladoA === 1){
            console.log("Bucha de ÁS");
        }else if(ladoA === 2){
            console.log("Bucha de DUQUE");
        }else if(ladoA === 3){
            console.log("Bucha de TERNO");
        }else if(ladoA === 4){
            console.log("Bucha de QUADRA");
        }else if(ladoA === 5){
            console.log("Bucha de QUINA");
        }else if(ladoA === 6){
            console.log("Bucha de SENA");
        }
    }else{
        console.log("NAO");
    }
}else{
    console.log("As peças vão de 0 a 6 somente.");
}