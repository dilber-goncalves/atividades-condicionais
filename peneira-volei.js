const altura = 207;

if(altura < 180){
    console.log("REPROVADO");
}else if(altura <185){
    console.log("Está APROVADO como LÍBERO");
}else if(altura <195){
    console.log("Está APROVADO como PONTEIRO");
}else if(altura <205){
    console.log("Está APROVADO como OPOSTO");
}else if(altura >206){
    console.log("Está APROVADO como CENTRAL");
}