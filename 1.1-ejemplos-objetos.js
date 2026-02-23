// Ejemplo de variables simples con diferentes tipos de datos
var nameu = "Sergio Homero";
var age = 20;
var isEnrolled = true;
var subjects = ["Programación", "Base de Datos", "Diseño"];
// Accedemos a la información
console.log(typeof (nameu)); // Muestra "string"
console.log(typeof (age)); // Muestra "number"
console.log(typeof (isEnrolled)); // Muestra "boolean"
console.log(typeof (subjects)); // Muestra "object"
console.log(Array.isArray(subjects)); // true
console.log(subjects.map(function (s) { return typeof (s); })); // Muestra "string" para cada materia
subjects.forEach(function (element) { // Recorremos el array de materias
    console.log(element);
});

// objeto que agrupe toda esta información, diferencia entre variables simples y objetos
var estudiante = {
    "name": "Sergio Homero",
    "age": 20,
    "isEnrolled": true,
    "subjects": ["Programación", "Base de Datos", "Diseño"]
};



console.log(typeof (estudiante)); // Muestra "object"
// Accedemos a los datos específicos del objeto
console.log("El nombre es:", estudiante.name);
console.log("La edad es:", estudiante.age);
console.log("¿Está inscrito?", estudiante.isEnrolled);
console.log("La primera materia es:", estudiante.subjects[0]);
console.log("La cantidad de materias es:", estudiante.subjects.length);
// Mostramos el objeto completo
console.log("El estudiante completo es:", estudiante);
console.table(estudiante); // Tip Pro: console.table lo muestra muy bonito
