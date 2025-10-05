// Ejercicio 2: Cadenas de Plantilla

// Declarar variables - USAR NOMBRES DIFERENTES para evitar conflictos
const nombreEstudiante: string = "Carlos Mendoza";
const carreraEstudiante: string = "Ingeniería de Sistemas";
const semestreEstudiante: number = 4;

// Usar template string para mostrar un mensaje en consola
console.log("=== EJERCICIO 2: CADENAS DE PLANTILLA ===");
console.log(`
Información del Estudiante:
---------------------------
Nombre: ${nombreEstudiante}
Carrera: ${carreraEstudiante}
Semestre: ${semestreEstudiante}

Mensaje completo: 
"Hola, soy ${nombreEstudiante}, estudio ${carreraEstudiante} y voy en ${semestreEstudiante} semestre."
`);

export {} //CONVIERTE EL ARCHIVO EN MÓDULO

