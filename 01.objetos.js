// Ejemplo de variables simples
var nameu = "Sergio Homero";
var age = 20;
var isEnrolled = true;
var subjects = ["Programación", "Base de Datos", "Diseño"];
// Accedemos a la información
console.log(typeof (nameu)); // Muestra "string"
console.log(typeof (age));
console.log(typeof (isEnrolled));
console.log(typeof (subjects));
console.log(Array.isArray(subjects)); // true
console.log(subjects.map(function (s) { return typeof (s); })); // Muestra "string" para cada materia
subjects.forEach(function (element) {
    console.log(element);
});
// Ahora, vamos a crear un objeto que agrupe toda esta información
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
