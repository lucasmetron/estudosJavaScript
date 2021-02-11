var nota1 = 6;
var nota2 = 7;

var media = (nota1 + nota2) / 2;

var conceito = "";

if( media >= 8){
    conceito ="òtimo";

} else if (media >= 6.5 ) {
    conceito ="Bom";
}

else {
    conceito ="Regular";
}

console.log(conceito);
console.log(media);

switch(conceito){

    case "òtimo":
        console.log("Parabéns, vc é um otimo aluno");
        break;

    case "Bom":
        console.log("Bom, Vc pode melhorar!");
        break;

    case "Regular":
        console.log("A nota foi ruim, vc precisa melhorar")
        break;

    default: 
        console.log ("houve algum erro");
        break;

}