let numeroSecreto = 0;
let intentos = 0;
let listadeNumerosGenerados = [];
let numeroMaximo = 10;

 console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero secreto en ${intentos} ${(intentos=== 1) ? 'vez' : 'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','el numero secreto es menor');  
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++
        limpiarCaja();
    }
    return;
};

function limpiarCaja () {
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listadeNumerosGenerados);
    if (listadeNumerosGenerados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros pisibles');
    }else{

    if (listadeNumerosGenerados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listadeNumerosGenerados.push(numeroGenerado);
        return numeroGenerado;
    }

   }
}
function condicionesIniciales() {
       asignarTextoElemento('h1','Juego del numero secreto');
       asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`); 
         numeroSecreto = generarNumeroSecreto();
       intentos = 1;  
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();  
    document.querySelector(`#reiniciar`).setAttribute('disabled','true')
}
condicionesIniciales();