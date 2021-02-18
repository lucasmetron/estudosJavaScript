// EXERCICIOS DE CONDICIONAIS 


/*
    //EXERCICIO 1

var letra = "z";

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"  ){
    console.log("Letra ("+letra+") é uma vogal!");
}
 else {
    console.log("Letra ("+letra+") é uma consoante!");
 }
*/

/*
    //EXERCICIO 2

var aluno = "Lucas";
var nota1 = 7;
var nota2 = 6;
var media = (nota1+nota2)/2;

if (media == 10 ){
    alert( aluno + " Aprovado com distinção "+media);
} else if (media >= 7 ){
    alert( aluno + " Aprovado " +media);
} else {
    alert( aluno + " Reprovado " +media);
}

*/

/*
    //EXERCICIO 3
    
var n1 = 10;
var n2 = 6;
var n3 = 70;

if (n1 > n2 && n1 > n3){
    alert("o maior numero é o: "+n1);
} else if ( n2 > n1 && n2 > n3) { 
    alert("o maior numero é o: "+n2);
} else ( alert("o maior numero é o: "+n3))

*/

/*
    //EXERCICIO 4
var n1 = prompt("digite o numero 1 : ");
var n2 = prompt("digite o numero 2 : ");

var invN1 = n2;
var invN2 = n1;

alert("Antes N1 = "+n1+" | Agora n1 vale = "+invN1+"\n"+
"Antes N2 = "+n2+" | Agora n2 vale = "+invN2)
*/

/*
    //EXERCICIO 5
var n1 = 70;
var n2 = 9;
var n3 = 800;

if(n1 > n2 && n1 > n3){
    var maior = n1;
    if(n2 < n3){
        var menor = n2
    } else {var menor = n3}
    alert ("Maior número: "+maior+"\n"+
    "menor numero: "+menor)

} else if ( n2 > n1 && n2 > n3 ){
    var maior = n2;
    if(n1 < n3){
        var menor = n1
    } else {var menor = n3}
    alert ("Maior número: "+maior+"\n"+
    "menor numero: "+menor)
} 

else  {
    maior = n3;
    if(n1 < n2){
        var menor = n1
    } else {var menor = n2}
    alert ("Maior número: "+maior+"\n"+
    "menor numero: "+menor)
}
*/
/*
// EXERCICIO 6 
var turno = prompt("Qual turno você estuda?")

switch (turno) {

    case "matutino":
    case "Matutino":
    case "M":
    case "m":
        alert("bom dia!")
        break;

    case "vespertino":
    case "Vespertino":
    case "v":
    case "V":
        alert("Boa tarde!")
        break;

    case "noturno":
    case "Noturno":
    case "n":
    case "N":
        alert("Boa noite!")
        break;

    default: alert("Turno Errado! ")
        break;

}
*/

/*DESCONTOS: 
    IMPOSTO DE RENDA
    INSS
    CALCULAR FGTS
*/

    // EXERCICIO 7
 /*   
var salarioBruto = 3000;
var salarioMenosIR ;
var descontoIR ;1992

if( salarioBruto <= 1903.98){
    salarioMenosIR = salarioBruto;

} else if (salarioBruto  <= 2826.65) {

    let desconto = 0.075 * salarioBruto;
    salarioMenosIR = salarioBruto - desconto;

} else if (salarioBruto <=3571.05){

    let desconto = 0.15 * salarioBruto;
    salarioMenosIR = salarioBruto - desconto;

} else if (salarioBruto <= 4664.8){

    let desconto = 0.225 * salarioBruto;
    salarioMenosIR = salarioBruto - desconto;

} else {

    let desconto = 0.275 * salarioBruto;
    salarioMenosIR = salarioBruto - desconto;
}

alert(salarioMenosIR)

*/


    // EXERCICIO 8
var resultado = 0;
i = 0;
var valores = [10,10]


for (var i = 0 ; i < valores.length ; i++ ){
    resultado = resultado + valores[i]
}

console.log(resultado)



while (i < valores.length) {

    resultado = resultado + valores[i];
    i++;
    console.log("O resultado é:  " +resultado)
}
