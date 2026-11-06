let chat = document.getElementById("chat");
let potencia;
let precision;
let damage;
let vida = 100;


function daño(potencia){
div = Math.floor(Math.random()*3)+2;
damage = potencia/div;
vida = vida - damage;
}