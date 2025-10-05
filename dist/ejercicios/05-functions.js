"use strict";
// Ejercicio 5: Funciones
// Crear una función calcularPromedio
function calcularPromedio(calificaciones) {
    if (calificaciones.length === 0) {
        return 0; // Evitar división por cero
    }
    let suma = 0;
    // Usar for...of para iterar sobre el arreglo
    for (const calificacion of calificaciones) {
        suma += calificacion;
    }
    return suma / calificaciones.length;
}
// Probar la función con calificaciones
console.log("=== EJERCICIO 5: FUNCIONES ===");
const notas1 = [85, 92, 78, 96, 88];
const notas2 = [100, 95, 90];
const notas3 = []; // Caso vacío
console.log(`Promedio de [${notas1.join(', ')}]: ${calcularPromedio(notas1).toFixed(2)}`);
console.log(`Promedio de [${notas2.join(', ')}]: ${calcularPromedio(notas2).toFixed(2)}`);
console.log(`Promedio de arreglo vacío: ${calcularPromedio(notas3)}`);
// Función alternativa con método reduce
function calcularPromedioReduce(calificaciones) {
    if (calificaciones.length === 0)
        return 0;
    return calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length;
}
console.log("\nUsando método reduce:");
console.log(`Promedio: ${calcularPromedioReduce(notas1).toFixed(2)}`);
