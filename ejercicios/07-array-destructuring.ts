// Ejercicio 7: Array Destructuring
// Implementado por: Yohan - Grupo JY

console.log("=== EJERCICIO 7: ARRAY DESTRUCTURING ===");

// ===== 1. DESTRUCTURACIÓN BÁSICA DE ARRAYS =====
const colores: string[] = ["Rojo", "Verde", "Azul", "Amarillo", "Naranja"];

// Destructuración básica
const [primero, segundo, tercero] = colores;
console.log("\n--- Destructuración Básica ---");
console.log(`Primer color: ${primero}`);
console.log(`Segundo color: ${segundo}`);
console.log(`Tercer color: ${tercero}`);

// ===== 2. DESTRUCTURACIÓN SALTEANDO ELEMENTOS =====
const [primerColor, , tercerColor] = colores;
console.log("\n--- Destructuración Saltando Elementos ---");
console.log(`Primer color: ${primerColor}`);
console.log(`Tercer color: ${tercerColor}`);

// ===== 3. DESTRUCTURACIÓN CON VALORES POR DEFECTO =====
const numeros: number[] = [10, 20];
const [a, b, c = 30, d = 40] = numeros;
console.log("\n--- Destructuración con Valores por Defecto ---");
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);

// ===== 4. DESTRUCTURACIÓN CON EL OPERADOR REST =====
const [primeroArr, segundoArr, ...restoColores] = colores;
console.log("\n--- Destructuración con Operador Rest ---");
console.log(`Primero: ${primeroArr}`);
console.log(`Segundo: ${segundoArr}`);
console.log(`Resto: ${restoColores.join(", ")}`);

// ===== 5. INTERCAMBIO DE VARIABLES =====
let x: number = 10;
let y: number = 20;
console.log("\n--- Intercambio de Variables ---");
console.log(`Antes: x = ${x}, y = ${y}`);
[x, y] = [y, x];
console.log(`Después: x = ${x}, y = ${y}`);

// ===== 6. DESTRUCTURACIÓN EN PARÁMETROS DE FUNCIÓN =====
function mostrarCoordenadas([x, y]: [number, number]): void {
    console.log("\n--- Destructuración en Parámetros ---");
    console.log(`Coordenadas: (${x}, ${y})`);
}

const coordenadas: [number, number] = [45, -75];
mostrarCoordenadas(coordenadas);

// ===== 7. DESTRUCTURACIÓN DE ARRAYS ANIDADOS =====
const matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [[primeraFila], [, segundaFila], [...terceraFila]] = matriz;
console.log("\n--- Destructuración de Arrays Anidados ---");
console.log(`Primera fila: ${primeraFila}`);
console.log(`Segunda fila: ${segundaFila}`);
console.log(`Tercera fila: ${terceraFila.join(", ")}`);

// ===== 8. DESTRUCTURACIÓN CON OBJETOS Y ARRAYS COMBINADOS =====
interface Estudiante {
    nombre: string;
    notas: number[];
}

const estudiante: Estudiante = {
    nombre: "Carlos Pérez",
    notas: [85, 92, 78, 96]
};

const { nombre, notas: [primeraNota, segundaNota] } = estudiante;
console.log("\n--- Destructuración Combinada ---");
console.log(`Estudiante: ${nombre}`);
console.log(`Primeras dos notas: ${primeraNota}, ${segundaNota}`);

// ===== 9. DESTRUCTURACIÓN CON MÉTODOS QUE RETORNAN ARRAYS =====
function obtenerDatos(): [string, number, boolean] {
    return ["Juan", 25, true];
}

const [nombrePersona, edad, activo] = obtenerDatos();
console.log("\n--- Destructuración de Retorno de Función ---");
console.log(`Nombre: ${nombrePersona}, Edad: ${edad}, Activo: ${activo}`);

// ===== 10. EJEMPLO PRÁCTICO: PROCESAR DATOS =====
const datosUsuario: [string, string, number] = ["yohan.dussan", "yohan@email.com", 30];

const [username, email, userAge] = datosUsuario;
console.log("\n--- Ejemplo Práctico: Datos de Usuario ---");
console.log(`Username: ${username}`);
console.log(`Email: ${email}`);
console.log(`Edad: ${userAge}`);

export {};