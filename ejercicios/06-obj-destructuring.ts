// Ejercicio 6: Desestructuración de Objetos
// Implementado por: Yohan - Grupo JY

// Reutilizar el objeto estudiante (similar al ejercicio 3)
const estudiante = {
    nombre: 'Maria Castro',
    edad: 22,
    carrera: 'Zootecnia',
    semestre: 7,
    universidad: 'Universidad de cundinamarca',
};

// Desestructurar nombre y carrera
const { nombre, carrera } = estudiante;

// Mostrar valores en consola
console.log('=== EJERCICIO 6: DESESTRUCTURACIÓN DE OBJETOS ===');
console.log('Objeto completo:', estudiante);
console.log('\nValores desestructurados:');
console.log(\Nombre: \\);
console.log(\Carrera: \\);

// Desestructuración con alias
const { nombre: nombreCompleto, carrera: programaAcademico } = estudiante;
console.log('\nCon alias:');
console.log(\Nombre completo: \\);
console.log(\Programa académico: \\);

// Desestructuración en parámetros de función
function mostrarInfo({ nombre, semestre }: { nombre: string, semestre: number }): void {
    console.log(\\nDesde función: \ - Semestre \\);
}

mostrarInfo(estudiante);

export {}
