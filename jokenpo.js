const jogador1 = "papel";
const jogador2 = "tesoura";

if (jogador1 === jogador2){
    console.log("Empate!");
}else{
    if(jogador1 === "pedra"){
        if(jogador2 === "tesoura"){
            console.log("Pedra ganhou!");
        }else{
            console.log("Papel ganhou!");
        }
    }else if(jogador1 === "tesoura"){
        if(jogador2 === "pedra"){
            console.log("Pedra ganhou!");
        }else{
            console.log("Tesoura ganhou!");
        }
    }else{
        if(jogador2 === "papel"){
            console.log("Papel ganhou!");
        }else{
            console.log("Pedra ganhou!");
        } 
    }
}
