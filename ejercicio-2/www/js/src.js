/* Solicita a un usuario su nombre y su primer apellido. Posteriormente pregúntale 
si le apetece un café.

- Si el usuario acepta mostraremos un mensaje del tipo: "¡Bienvenid@ Juan Campos! 
  En breves recibirá su café calentito en casa."

- Si el usuario no acepta: "¡Bienvenid@ Juan Campos! Hoy no hay café." */

"use strict"
const a= prompt("Introduce tu nombre y apellido");
const b= confirm("¿Te gusta tomar un café?");

if (b) {
    console.log("!Bienvenid@ Juan Campos! En breves recibirá su café calentito en casa.");
} else {
    console.error("!Bienvenid@ Juan Campos! Hoy no hay café.");
} 
