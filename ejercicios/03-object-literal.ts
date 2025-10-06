// Ejercicio 3: Literales de Objetos
// Implementado por: Yohan - Grupo JY

// Definir un objeto estudiante
const estudiante = {
    nombre: 'María Castro',
    edad: 23,
    carrera: 'Zootecnia',
    semestre: 7,
    
    // Método que retorna una descripción
    obtenerDescripcion(): string {
        return this.nombre + ' tiene ' + this.edad + ' años, estudia ' + this.carrera + ' y cursa el ' + this.semestre + '° semestre.';
    }
};

// Mostrar la descripción en consola
console.log('=== EJERCICIO 3: LITERALES DE OBJETOS ===');
console.log(estudiante.obtenerDescripcion());

// Acceder a propiedades individuales
console.log('\nPropiedades individuales:');
console.log('Nombre: ' + estudiante.nombre);
console.log('Edad: ' + estudiante.edad);

export {}; // CONVIERTE EL ARCHIVO EN MÓDULO
