//Declaración de variables
let numeroMaxPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaxPosible) + 1;
let numeroIngresado;
let intentos = 0;
//meensaje de bienvenida
alert('Bienvenido a nuestro sitio web.!');
numeroIngresado = Number(prompt(`Ingrese un número del 1 al ${numeroMaxPosible}`));
//comparación de datos
while(intentos < 5){
    if(numeroIngresado === numeroSecreto){
        alert('Felicidades, ganaste!');
        break;
    }else if(numeroIngresado > numeroSecreto){
        numeroIngresado = Number(prompt('El número ingresado es mayor al número secreto. Ingrese otro número'));
        intentos++;
    }else if(numeroIngresado < numeroSecreto){
        numeroIngresado = Number(prompt('El número ingresado es menor al número secreto. Ingrese otro número'));
        intentos++;
    }else{
        alert('El número ingresado no es válido');
    }
};
if(intentos === 5){
    alert('Lo sentimos, perdiste!');
};
