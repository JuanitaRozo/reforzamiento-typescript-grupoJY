// Ejercicio 3: Literales de Objetos
juanita-ejercicio3
// Implementado por: Juanita - Grupo JY

// Implementado por: Yohan - Grupo JY
main

// Definir un objeto estudiante con propiedades
const estudiante = {
juanita-ejercicio3
    nombre: 'María López',
    edad: 22,
    carrera: 'Medicina',
    semestre: 6,
    
    // Método que retorna una descripción
    obtenerDescripcion(): string {
        return \\ tiene \ años, estudia \ y cursa el \° semestre.\;

    nombre: 'María Castro',
    edad: 23,
    carrera: 'Zootecnia',
    semestre: 7,
    
    // Método que retorna una descripción
    obtenerDescripcion(): string {
        return this.nombre + ' tiene ' + this.edad + ' años, estudia ' + this.carrera + ' y cursa el ' + this.semestre + '° semestre.';
 main
    }
};

// Mostrar la descripción en consola
console.log('=== EJERCICIO 3: LITERALES DE OBJETOS ===');
console.log(estudiante.obtenerDescripcion());

// Acceder a propiedades individuales
console.log('\nPropiedades individuales:');
 juanita-ejercicio3
console.log(\Nombre: \\);
console.log(\Edad: \\);
console.log(\Carrera: \\);
console.log(\Semestre: \\);

console.log('Nombre: ' + estudiante.nombre);
console.log('Edad: ' + estudiante.edad);

export {}; // CONVIERTE EL ARCHIVO EN MÓDULO
 main
