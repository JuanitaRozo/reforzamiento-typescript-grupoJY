"use strict";
// Ejercicio 7: Desestructuración de Arreglos
// Reutilizar el arreglo de calificaciones
const calificaciones = [85, 92, 78, 96, 88, 90];
// Desestructurar el primer y segundo elemento
const [primeraCalificacion, segundaCalificacion] = calificaciones;
// Mostrar valores en consola
console.log("=== EJERCICIO 7: DESESTRUCTURACIÓN DE ARREGLOS ===");
console.log(`Arreglo completo: [${calificaciones.join(', ')}]`);
console.log("\nValores desestructurados:");
console.log(`Primera calificación: ${primeraCalificacion}`);
console.log(`Segunda calificación: ${segundaCalificacion}`);
// Desestructuración con omisión de elementos
const [primera, , tercera] = calificaciones;
console.log(`\nOmisión del segundo elemento:`);
console.log(`Primera: ${primera}, Tercera: ${tercera}`);
// Desestructuración con rest operator
const [primerElemento, ...restoElementos] = calificaciones;
console.log(`\nUsando rest operator:`);
console.log(`Primer elemento: ${primerElemento}`);
console.log(`Resto de elementos: [${restoElementos.join(', ')}]`);
// Intercambio de variables usando desestructuración
let a = 10;
let b = 20;
console.log(`\nIntercambio de variables:`);
console.log(`Antes: a = ${a}, b = ${b}`);
[a, b] = [b, a];
console.log(`Después: a = ${a}, b = ${b}`);
