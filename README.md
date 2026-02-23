# Objetos JavaScript, JSON y BSON 📚

Este repositorio contiene ejemplos y ejercicios prácticos para entender la evolución desde los objetos en JavaScript hasta BSON en MongoDB. Es una introducción fundamental para trabajar con bases de datos NoSQL basadas en documentos.

## 🎯 Objetivo

Comprender la notación de objetos en JavaScript, el formato JSON para intercambio de datos en la web, y el formato BSON utilizado por MongoDB para el almacenamiento eficiente de documentos.

## 📋 Contenido del Repositorio

### 1️⃣ Fundamentos de Objetos en JavaScript

#### [1.1-ejemplos-objetos.js](1.1-ejemplos-objetos.js)
Introducción a los objetos en JavaScript:
- Diferencia entre variables simples y objetos
- Tipos de datos primitivos vs objetos
- Creación y acceso a propiedades de objetos
- Trabajando con arrays como propiedades
- Uso de `console.table()` para visualización

**Ejemplo incluido:** Objeto `estudiante` con propiedades básicas (nombre, edad, materias inscrito).

#### [1.2-ejemplo-objetos-js.html](1.2-ejemplo-objetos-js.html)
Página HTML para ejecutar los ejemplos de objetos en el navegador y ver los resultados en la consola de desarrollador.

### 2️⃣ Ejercicios Prácticos con Objetos

#### [2.1-ejercicio-objetos.js](2.1-ejercicio-objetos.js)
Ejercicio práctico para reforzar conceptos:
- Creación de objetos complejos (jugador de videojuegos)
- Objetos anidados (propiedades que son objetos)
- Arrays como propiedades
- Navegación y acceso a datos en estructuras anidadas

**Ejercicio:** Objeto `jugador` con habilidades, equipo y estadísticas.

#### [2.2-ejercicio-objetos-js.html](2.2-ejercicio-objetos-js.html)
Página HTML para ejecutar y probar el ejercicio de objetos.

### 3️⃣ JSON: Intercambio de Datos en la Web

#### [3.1-ejemplos-datos-json.json](3.1-ejemplos-datos-json.json)
Introducción al formato JSON:
- Los 6 tipos de datos básicos en JSON (String, Number, Boolean, Null, Object, Array)
- Estructuras anidadas (objetos dentro de objetos)
- Arrays de objetos
- Casos de uso comunes

**Ejemplos incluidos:**
- Tipos de datos básicos
- Estructuras anidadas complejas (usuario con perfil, contacto e idiomas)

#### [3.2-ejemplo-uso-json.html](3.2-ejemplo-uso-json.html)
Página HTML que demuestra cómo usar JSON en aplicaciones web:
- Carga y parseo de datos JSON
- Manipulación de datos JSON con JavaScript
- Casos de uso prácticos en la web

### 4️⃣ BSON y MongoDB

#### [3.3-comparacion-json-bson.json](3.3-comparacion-json-bson.json)
Comparación detallada entre JSON y BSON:
- **JSON:** Formato de texto plano, legible por humanos, 6 tipos básicos
- **BSON:** Formato binario, más de 20 tipos de datos, optimizado para MongoDB
- Ejemplo de documento MongoDB con `_id`, fechas y ObjectId
- Ventajas de BSON para almacenamiento y rendimiento
- Tipos especiales: `ObjectId`, `Date`, `Binary`, `Timestamp`

**Conceptos clave:**
- BSON es más rápido de parsear y procesar
- BSON soporta tipos de datos adicionales necesarios para bases de datos
- MongoDB usa BSON internamente para almacenar documentos

## 🚀 Cómo Usar Este Repositorio

### Opción 1: Node.js (para archivos .js)
```bash
node 1.1-ejemplos-objetos.js
node 2.1-ejercicio-objetos.js
```

### Opción 2: Navegador (para archivos .html)
Abre los archivos HTML directamente en tu navegador y revisa la consola de desarrollador (F12).

### Opción 3: Visual Studio Code
Usa la extensión "Code Runner" para ejecutar los archivos JavaScript directamente.

## 📚 Ruta de Aprendizaje Recomendada

1. **Comienza con objetos en JavaScript** → `1.1-ejemplos-objetos.js` y `1.2-ejemplo-objetos-js.html`
2. **Practica con ejercicios** → `2.1-ejercicio-objetos.js` y `2.2-ejercicio-objetos-js.html`
3. **Aprende JSON** → `3.1-ejemplos-datos-json.json` y `3.2-ejemplo-uso-json.html`
4. **Entiende BSON y MongoDB** → `3.3-comparacion-json-bson.json`

## 🔑 Conceptos Clave

- **Objeto JavaScript:** Estructura de datos que agrupa información relacionada en pares clave-valor
- **JSON (JavaScript Object Notation):** Formato de texto ligero para intercambio de datos, ampliamente usado en APIs REST
- **BSON (Binary JSON):** Formato binario que extiende JSON con más tipos de datos, usado por MongoDB para almacenamiento eficiente
- **Documentos en MongoDB:** Estructuras similares a JSON que se almacenan como BSON

## 🎓 Casos de Uso

- **JSON:** APIs REST, archivos de configuración, intercambio de datos entre cliente y servidor
- **BSON:** Almacenamiento interno en MongoDB, operaciones de base de datos eficientes, consultas rápidas

## 🔗 Próximos Pasos

Después de dominar estos conceptos, estarás preparado para:
- Trabajar con MongoDB y crear colecciones de documentos
- Diseñar esquemas de datos NoSQL
- Realizar operaciones CRUD en bases de datos de documentos
- Construir APIs que consuman y produzcan JSON

---

**Nota:** Este repositorio es parte de una serie sobre fundamentos de bases de datos NoSQL.