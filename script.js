var aluno = {
    nome: "lucas",
    idade: 24,
    notas: [8,6,7,4],
    responsaveis: [
        {
        nome: "Selina",
        idade: 58,
    },
    
    {
        nome: "Manoel",
        idade: 60,
    }

]  

}

var media = null;

for ( i = 0; i < aluno.notas.length; i++){
    media = media + aluno.notas[i];
}

aluno.media = media / aluno.notas.length;


console.log(aluno.media);




