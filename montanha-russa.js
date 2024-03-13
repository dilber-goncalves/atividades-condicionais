const idade = 18;
const possuiPatologia = false;
const altura = 180;
const estudante = false;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150){
    console.log("ACESSO NEGADO!");
}else{
    if(idade < 18 || estudante){
        console.log("R$ 10,00 o bilhete.");
    }else{
        console.log("R$ 20,00 o bilhete");
    }
}