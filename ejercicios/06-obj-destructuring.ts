// Ejercicio 6: Desestructuración de Objetos

// Reutilizar el objeto estudiante (similar al ejercicio 3)
const estudiante = {
    nombre: "Diego Ramirez",
    edad: 23,
    carrera: "Derecho",
    semestre: 8,
    universidad: "Universidad Nacional"
};

// Desestructurar nombre y carrera
const { nombre, carrera } = estudiante;

// Mostrar valores en consola
console.log("=== EJERCICIO 6: DESESTRUCTURACIÓN DE OBJETOS ===");
console.log("Objeto completo:", estudiante);
console.log("\nValores desestructurados:");
console.log(`Nombre: ${nombre}`);
console.log(`Carrera: ${carrera}`);

// Desestructuración con alias
const { nombre: nombreCompleto, carrera: programaAcademico } = estudiante;
console.log("\nCon alias:");
console.log(`Nombre completo: ${nombreCompleto}`);
console.log(`Programa académico: ${programaAcademico}`);

// Desestructuración en parámetros de función
function mostrarInfo({ nombre, semestre }: { nombre: string, semestre: number }): void {
    console.log(`\nDesde función: ${nombre} - Semestre ${semestre}`);
}

mostrarInfo(estudiante);