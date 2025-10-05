"use strict";
// Ejercicio 4: Arreglos
Object.defineProperty(exports, "__esModule", { value: true });
// Crear un arreglo con calificaciones
const calificaciones = [45, 40, 35, 35, 45, 48];
// Calcular el promedio con un bucle for
let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
}
const promedio = suma / calificaciones.length;
// Mostrar resultados en consola
console.log("=== EJERCICIO 4: ARREGLOS ===");
console.log(`Calificaciones: [${calificaciones.join(', ')}]`);
console.log(`Suma total: ${suma}`);
console.log(`Número de calificaciones: ${calificaciones.length}`);
console.log(`Promedio calculado: ${promedio.toFixed(2)}`);
// Mostrar cada calificación con su índice
console.log("\nDetalle de calificaciones:");
for (let i = 0; i < calificaciones.length; i++) {
    console.log(`Calificación ${i + 1}: ${calificaciones[i]}`);
}
