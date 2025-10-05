"use strict";
// Ejercicio 2: Cadenas de Plantilla
Object.defineProperty(exports, "__esModule", { value: true });
// Declarar variables - USAR NOMBRES DIFERENTES para evitar conflictos
const nombreEstudiante = "Carlos Mendoza";
const carreraEstudiante = "Ingeniería de Sistemas";
const semestreEstudiante = 4;
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
