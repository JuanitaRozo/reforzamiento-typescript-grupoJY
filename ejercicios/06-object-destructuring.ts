// Ejercicio 6: Object Destructuring

console.log("=== EJERCICIO 6: OBJECT DESTRUCTURING ===");

// ===== 1. DESTRUCTURACIÓN BÁSICA DE OBJETOS =====
interface Estudiante {
    nombre: string;
    edad: number;
    carrera: string;
    promedio: number;
    ciudad: string;
    activo: boolean;
}

const estudiante: Estudiante = {
    nombre: "María García",
    edad: 22,
    carrera: "Ingeniería de Sistemas",
    promedio: 4.2,
    ciudad: "Bogotá",
    activo: true
};

// Destructuración básica
const { nombre, edad, carrera } = estudiante;
console.log("\n--- Destructuración Básica ---");
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Carrera: ${carrera}`);

// ===== 2. DESTRUCTURACIÓN CON RENOMBRADO =====
const { nombre: nombreCompleto, promedio: notaPromedio } = estudiante;
console.log("\n--- Destructuración con Renombrado ---");
console.log(`Nombre completo: ${nombreCompleto}`);
console.log(`Nota promedio: ${notaPromedio}`);

// ===== 3. DESTRUCTURACIÓN CON VALORES POR DEFECTO =====
const { ciudad, activo, semestre = 5 } = estudiante;
console.log("\n--- Destructuración con Valores por Defecto ---");
console.log(`Ciudad: ${ciudad}`);
console.log(`Activo: ${activo}`);
console.log(`Semestre: ${semestre}`);

// ===== 4. DESTRUCTURACIÓN EN PARÁMETROS DE FUNCIÓN =====
function mostrarInfoEstudiante({ nombre, edad, carrera, promedio = 0 }: Estudiante): void {
    console.log("\n--- Destructuración en Parámetros ---");
    console.log(`Estudiante: ${nombre}`);
    console.log(`Edad: ${edad} años`);
    console.log(`Carrera: ${carrera}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);
}

mostrarInfoEstudiante(estudiante);

// ===== 5. DESTRUCTURACIÓN ANIDADA =====
interface Direccion {
    calle: string;
    numero: string;
    barrio: string;
}

interface Profesor {
    nombre: string;
    departamento: string;
    direccion: Direccion;
}

const profesor: Profesor = {
    nombre: "Carlos Rodríguez",
    departamento: "Ciencias de la Computación",
    direccion: {
        calle: "Carrera 45",
        numero: "12-34",
        barrio: "El Nogal"
    }
};

// Destructuración anidada
const { 
    nombre: nombreProfesor, 
    direccion: { calle, barrio } 
} = profesor;

console.log("\n--- Destructuración Anidada ---");
console.log(`Profesor: ${nombreProfesor}`);
console.log(`Dirección: ${calle}, ${barrio}`);

// ===== 6. DESTRUCTURACIÓN CON EL OPERADOR REST =====
const { nombre: nombreEst, ciudad: ciudadEst, ...otrosDatos } = estudiante;
console.log("\n--- Destructuración con Operador Rest ---");
console.log(`Nombre: ${nombreEst}`);
console.log(`Ciudad: ${ciudadEst}`);
console.log("Otros datos:", otrosDatos);

// ===== 7. EJEMPLO PRÁCTICO =====
interface Usuario {
    id: number;
    username: string;
    email: string;
    perfil: {
        nombre: string;
        apellido: string;
        telefono?: string;
    };
}

const usuario: Usuario = {
    id: 1,
    username: "juan_perez",
    email: "juan@example.com",
    perfil: {
        nombre: "Juan",
        apellido: "Pérez",
        telefono: "3001234567"
    }
};

function configurarUsuario({
    username,
    perfil: { nombre, apellido, telefono = "No especificado" }
}: Usuario): void {
    console.log("\n--- Ejemplo Práctico ---");
    console.log(`Usuario: ${username}`);
    console.log(`Nombre: ${nombre} ${apellido}`);
    console.log(`Teléfono: ${telefono}`);
}

configurarUsuario(usuario);

// ===== 8. DESTRUCTURACIÓN CON ARRAYS DE OBJETOS =====
const estudiantes: Estudiante[] = [
    {
        nombre: "Ana López",
        edad: 20,
        carrera: "Medicina",
        promedio: 4.5,
        ciudad: "Medellín",
        activo: true
    },
    {
        nombre: "Pedro Martínez",
        edad: 23,
        carrera: "Derecho",
        promedio: 3.8,
        ciudad: "Cali",
        activo: false
    }
];

console.log("\n--- Destructuración con Arrays ---");
estudiantes.forEach(({ nombre, carrera, promedio }) => {
    console.log(`${nombre} - ${carrera} (${promedio.toFixed(1)})`);
});

export {};