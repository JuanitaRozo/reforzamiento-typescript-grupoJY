// Ejercicio 4: Arreglos
// Implementado por: Juanita - Grupo JY

// Crear un arreglo con calificaciones
const calificaciones: number[] = [85, 92, 78, 96, 88, 90];

// Calcular el promedio con un bucle for
let suma: number = 0;

for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
}

const promedio: number = suma / calificaciones.length;

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

export {} //CONVIERTE EL ARCHIVO EN MÓDULO