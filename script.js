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


    //EXERCICIO 4
var n1 = prompt("digite o numero 1 : ");
var n2 = prompt("digite o numero 2 : ");

var invN1 = n2;
var invN2 = n1;

alert("Antes N1 = "+n1+" | Agora n1 vale = "+invN1+"\n"+
"Antes N2 = "+n2+" | Agora n2 vale = "+invN2)

