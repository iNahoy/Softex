let total = 0;
let buffer = "0";
let opa;

const resultado = document.querySelector('.resultado');

function buttonClick(value){
    if (isNaN(value)) {
        simbolos(value);
    }else{
        numeros(value);
    }
    resultado.innerText = buffer;
}

function simbolos(symbol) {
    switch(symbol){
        case 'C':
            buffer = '0';
            total = 0;
            break;

        case '=':
            if (opa === null){
                return;
            }

            opr(parseInt(buffer));
            opa = null;
            buffer = total;
            total = 0;
            break;

        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }
            else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        
        case ',':
            buffer += '.';
            break;

        case '+':
        case '-':
        case 'X':
        case '/':
        case '*':
        case 'Mod':
            matematica(symbol);
            break;
        }
    }

function matematica(symbol) {
    if(buffer === '0'){
        return;
    }

    const nint = parseInt(buffer);

    if(total === 0){
        total = nint;
    }
    else{
        opr (nint);
    }
    opa = symbol;
    buffer = '0';
}

function opr (nint){
    if(opa === "+"){
       total += nint; 
    } else if (opa === "-"){
        total -= nint;
    } else if (opa === "X"){
        total *= nint;
    } else if (opa === "/"){
        total /= nint;
    } else if (opa === "Mod"){
        total %= nint;
    } else if (opa === "*"){
        total **= nint;
    } 
}

function numeros(nStr){
    if (buffer === '0'){
        buffer = nStr;
    } else{
        buffer += nStr;
    }
}

function init (){
    document.querySelector('.calculadora')
    .addEventListener('click', 
    function(event){
        buttonClick(event.target.innerText);
    })
}
init();