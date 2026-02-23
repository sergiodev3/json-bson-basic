// Ejericio: Crear un objeto JSON para representar un objeto del mundo real
// como un jugador de videojuegos, con propiedades 
// Nota: Usamos comillas en las claves para acostumbrarnos a JSON/MongoDB
const jugador = {
    "nickname": "ProGamer99",
    "nivel": 25,
    "estaActivo": true,
    "habilidades": ["Fuego", "Hielo", "Teletransporte"], // Esto es un Array
    "equipo": {                                         // Esto es un Objeto anidado
        "arma": "Espada de Madera",
        "daño": 50,
        "durabilidad": "80%"
    }
};

// 2. Mostramos el objeto completo
console.log("--- Documento Completo ---");
console.table(jugador); // Tip Pro: console.table lo muestra muy bonito en tabla

// 3. Accediendo a datos específicos (Navegación)
console.log("--- Datos Específicos ---");
console.log("El apodo es:", jugador.nickname);
console.log("Su segunda habilidad es:", jugador.habilidades[1]);
console.log("El daño de su arma es:", jugador.equipo.daño);