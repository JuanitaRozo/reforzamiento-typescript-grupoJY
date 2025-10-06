// Ejercicio 3: Literales de Objetos

// Definir un objeto estudiante
const estudiante = {
    nombre: "Sebastian Tavera",
    edad: 26,
    carrera: "Mecanica Automotriz",
    semestre: 4,
    
    // Método que retorna una descripción
    obtenerDescripcion(): string {
        return `${this.nombre} tiene ${this.edad} años, estudia ${this.carrera} y cursa el ${this.semestre}° semestre.`;
    }
};

// Mostrar la descripción en consola
console.log("=== EJERCICIO 3: LITERALES DE OBJETOS ===");
console.log(estudiante.obtenerDescripcion());

// Acceder a propiedades individuales
console.log("\nPropiedades individuales:");
console.log(`Nombre: ${estudiante.nombre}`);
console.log(`Edad: ${estudiante.edad}`);

export {} //CONVIERTE EL ARCHIVO EN MÓDULO