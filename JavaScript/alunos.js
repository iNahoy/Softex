function média(){
    var n1 = Number(prompt("Digite sua primeira nota:"));
    var n2 = Number(prompt("Digite sua segunda nota:"));
    var n3 = Number(prompt("Digite sua terceira nota:"));
    mda =  (n1 + n2 + n3)
    r = mda/3

    if (7 <= r){
        document.write("O aluno foi aprovado!");
    }
    if (6.9 >= r){
        document.write("O aluno foi reprovado!");
    }
}

function pontos(){
    var nota1 = Number(prompt("Digite sua primeira nota"));
    var nota2 = Number(prompt("Digite sua segunda nota"));
    res = nota1 + nota2
    pas = 21
        if (res < 21) {
        apr = pas - res 
        document.write("Você precisa tirar "+apr+" pontos para ser aprovado, aluno.");
    }
}