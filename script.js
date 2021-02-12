

/*function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1+ nota2) /2;
    //console.log(media);

    return media;
}


var resultado1 = media(5,10);
var resultado2 = media(8,4);
var resultado3 = media(9,7);

console.log(resultado1+ " "+ resultado2+ " "+resultado3)*/


function tabuada(n) {

    var multiplicador = n;

    for (var i = 1; i <= 10; i++) {
        var resultado = n * i;
        console.log(n + " vezes " + i + " é igual a " + resultado)
        if (i == 10) {
            console.log("acabou!")
        } else { }
    }

}

n = prompt("Digite o numero desejado para tabular:")
tabuada(n);