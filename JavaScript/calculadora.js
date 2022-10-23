var n1 = Number(window.prompt("Digite um número"))
var n2 = Number(window.prompt("Digite outro número"))
var op = String(window.prompt("Digite sua operação: "+"+ - Adição | - - Subtração | * - Multiplicação | / - Divisão | ** - Potência | % - Módulo"))
    if (op === "+"){
        res = n1 + n2
        document.write('A soma de ' + (n1) + ' e ' + (n2) + ' é igual a: ' + (res));
    }
        else if (op === "-") {
        res = n1 - n2
        document.write('A subtração de ' + (n1) + ' e ' + (n2) +  ' é igual a: ' + (res));
    }
        else if (op === "*"){
        res = n1 * n2
        document.write('A multiplicação de ' + (n1) + ' e ' + (n2) + ' é igual a: ' + (res));
    } 
        else if (op === "**"){
        res = n1 ** n2
        document.write('A potenciação de '+ (n1) +' e '+ (n2) + ' é igual a: ' + (res));
    }
        else if (op === "/"){
        res = n1 / n2
        document.write('A divisão de ' + (n1) + ' e ' + (n2) + ' é igual a: ' + (res));
            if (res !=0){
                sobra = n1 % n2
            document.writeln('<br> A sobra da divisão de '+ (n1) +' e '+ (n2) + ' é igual a: ' + (sobra));
        }
    }
        else if (op === "%"){
        res = n1 % n2
        document.write('O módulo de '+ (n1) +' e '+ (n2) + ' é igual a: ' + (res))}