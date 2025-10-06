// Ejercicio 5: Funciones
// Implementado por: Yohan - Grupo JY

// Crear una función calcularPromedio
function calcularPromedio(calificaciones: number[]): number {
    if (calificaciones.length === 0) {
        return 0; // Evitar división por cero
    }
    
    let suma: number = 0;
    
    // Usar for...of para iterar sobre el arreglo
    for (const calificacion of calificaciones) {
        suma += calificacion;
    }
    
    return suma / calificaciones.length;
}

// Probar la función con calificaciones
console.log('=== EJERCICIO 5: FUNCIONES ===');

const notas1: number[] = [45, 42, 38, 46, 48];
const notas2: number[] = [40, 45, 40];
const notas3: number[] = []; // Caso vacío

console.log(\Promedio de [\]: \\);
console.log(\Promedio de [\]: \\);
console.log(\Promedio de arreglo vacío: \\);

// Función alternativa con método reduce
function calcularPromedioReduce(calificaciones: number[]): number {
    if (calificaciones.length === 0) return 0;
    return calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length;
}

console.log('\nUsando método reduce:');
console.log(\Promedio: \\);

// Función con parámetros opcionales y valor por defecto
function generarReporte(nombre: string, calificaciones: number[], materia: string = 'Matemáticas'): string {
    const promedio = calcularPromedio(calificaciones);
    return \Reporte de \ - \: Promedio = \\;
}

console.log('\nReporte con función adicional:');
console.log(generarReporte('Juanita Rozo', notas1));
console.log(generarReporte('Yohan Dussan', notas2, 'Física'));
