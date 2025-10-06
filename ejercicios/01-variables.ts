// Ejercicio 1: Variables y Alcance
// Implementado por: Juanita - Grupo JY

// Declarar una variable const para el nombre de un estudiante
const nombreEstudiante: string = "Ana García";

// Declarar una variable let para la edad y actualizar su valor
let edadEstudiante: number = 20;
edadEstudiante = 21; // Actualización permitida con let

// Imprimir ambos valores
console.log("=== EJERCICIO 1: VARIABLES Y ALCANCE ===");
console.log(`Nombre: ${nombreEstudiante}`);
console.log(`Edad: ${edadEstudiante}`);

// Explicación en comentarios:
/*
DIFERENCIA ENTRE CONST Y LET:

- CONST: 
  * Debe inicializarse al declarar
  * No se puede reasignar un nuevo valor
  * Es inmutable para tipos primitivos
  * Ideal para valores que no cambian

- LET:
  * Puede declararse sin inicializar
  * Permite reasignación de valores
  * Tiene alcance de bloque {}
  * Ideal para variables que cambian
*/