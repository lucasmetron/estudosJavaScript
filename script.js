//Nome do aluno - Nota 1 - Nota 2 - Media - Aprovado ou reprovado
/*function media(n1, n2){
    return (n1+ n2) / 2;
}

function seletorAluno(nome){

    var alunoselect;

    for (i=0; i <= nomes.length; i++) {

        if(nome != nomes[i] ){
        } 
        
        else if (nome == nomes[i]) {
            
            alunoselect = nomes[i];
        }
        else if(nomes.leght -1 > i){
            alunoselect = "Desconhecido"
        }

    }
    
   

    return alunoselect;
}



//console.log(media(7,8));
console.log (seletorAluno("Bianca"));*/

//Nome do aluno - Nota 1 - Nota 2 - Media - Aprovado ou reprovado

var nomes = ["Lucas", "Jose", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media (n1 ,n2){
    return (n1+n2)/2;
}

function passou(media){


    if (media > 7){
        return "Aprovado!"
    } else {
        return "Reprovado!"
    }

}

/*function juiz (m){

    var status = "vazio"; 
    
    switch (m){

        case m >= 6:
            status = "Aprovado!" 
        break;

        case m >=5.9:
            status = "Recuperação"
        break;

        case m < 5:
            status = "Reprovado"
            break;
        
        default:
             console.log("Erro!");
             break;

    }       
    
    return status;
}*/

for (var index in nomes){

    console.log(
    nomes[index] + " " +
    notasA[index] + " " + 
    notasB[index] + " " +
    "Sua média foi: "+ media(notasA[index], notasB[index]) + 
    " Você está: " + passou(media(notasA[index], notasB[index]))
    
    );
}






