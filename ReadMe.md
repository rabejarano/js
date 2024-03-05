# JS (javascript)

JavaScript es uno de los lenguajes de programación más usados y populares del mundo. Nació en 1995 para darle interactividad a las páginas web y desde entonces ha evolucionado hasta convertirse en un lenguaje de programación de propósito general. Dicho de otra forma: se puede usar casi para cualquier cosa.

## ¿Por qué aprender JS?

JavaScript es, a día de hoy, el único lenguaje de programación que todos los navegadores web entienden sin necesidad de realizar ningún paso previo. Esto hace que casi cualquier página web que visitas tiene alguna línea de JavaScript en su interior.

Su curva de aprendizaje para iniciarte es muy corta ya que en muy poco tiempo puedes empezar a hacer cosas interesantes. Para alcanzar a ser un buen programador en JavaScript necesitarás años de práctica, pero para empezar a hacer cosas interesantes bastará con poco tiempo.

Por si fuera poco, JavaScript es uno de los lenguajes de programación más demandados en el mercado laboral. Es normal, ya que es un lenguaje muy versátil y que se puede usar para casi cualquier cosa.

Además, con JavaScript vas a poder desarrollar casi cualquier cosa que te propongas. Desde aplicaciones web, móviles y de escritorio a backend, videojuegos, inteligencia artificial, Internet de las cosas. Todo un mundo de posibilidades con un sólo lenguaje.

## Entorno de Aprendizaje (web console - Consola)

Todos los navegadores tienen una herramienta llamada consola. La consola nos permite ejecutar código JavaScript en tiempo real y ver el resultado. También ahí podemos ver los errores, advertencias y trazas que se producen en nuestro código.

## Tipos de Datos

En JavaScript tenemos 9 tipos de datos que se dividen en dos grandes grupos: primitivos o no primitivos. Más adelante te contaré qué significa esto, pero por ahora, vamos a ver los tipos primitivos.

Dentro de los tipos primitivos tenemos 7 tipos de datos:

- number
- string
- boolean
- null
- undefined
- symbol
- bigint

## Números

Los números (tipo number) son los datos más básicos que podemos representar en JavaScript. En JavaScript, no hay una diferencia entre números enteros y números decimales, todos los números son de tipo number:

```
7
3.14
19.95
2.998e8
-1
```

### Operadores aritméticos

Con los números, puedes usar los operadores aritméticos para realizar operaciones matemáticas. En JavaScript tenemos los siguientes operadores aritméticos:

- +: suma
- -: resta
- \*: multiplicación
- /: división
- %: módulo (resto de la división)
- \*\*: exponente

Al usar los operadores aritméticos, el resultado siempre será un número. Por ejemplo:

```
2 + 2 // 4
4 - 2 // 2
3 * 2 // 6
2 / 2 // 1
2 % 2 // 0
3 ** 3 // 27
```

## Cadenas de texto

La cadena de texto (tipo string) es otro tipo de dato muy común. En JavaScript, las cadenas de texto se representan entre comillas simples, dobles o acentos graves:

```
'Estás aprendiendo JavaScript'

"JavaScript te va a gustar"

`Esto es una cadena de texto`
```

### Concatenación

Para unir dos cadenas de texto, podemos usar el operador +:

```
'Estás aprendiendo ' + 'JavaScript' // 'Estás aprendiendo JavaScript'
```

Como ves, el operador + de concatenación de cadenas de texto es visualmente el mismo que el operador + de suma de números. El operador + funciona de forma diferente dependiendo del tipo de dato que estemos usando

## Booleanos

Los booleanos representa sólo dos valores: true (verdadero) o false (falso). Por ejemplo:

- ¿La luz está encendida (true) o apagada (false)?
- ¿Está lloviendo (true) o no está lloviendo (false)?
- ¿Está el usuario logueado (true) o no está logueado (false)?

Estos son ejemplos de preguntas que podemos responder con un valor booleano.

```
true
false
```

## Los operadores de comparación

Los operadores de comparación en JavaScript nos permiten comparar dos valores. Siempre devuelven un valor booleano (true o false).

Por ejemplo, podemos comparar si un número es mayor que otro con el operador >, o si un número es menor que otro con el operador <.

```
5 > 3 // true
5 < 3 // false
```

También tenemos los operadores >= y <= que nos permiten comparar si un número es mayor o igual que otro, o si un número es menor o igual que otro.

```
5 >= 3 // true
5 >= 5 // true
5 <= 3 // false
5 <= 5 // true
```

Para saber si dos valores son iguales podemos usar el operador === o, para saber si son diferentes, el operador !==.

```
5 === 5 // true
5 !== 5 // false
```

### Comparando cadenas de texto

No sólo podemos usar los comparadores para comparar números, también podemos usarlos para comparar cadenas de texto y otros tipos de datos.

```
'JavaScript' === 'JavaScript' // true
'JavaScript' === 'Java' // false
"JavaScript" !== 'PHP' // true
`Estoy Aprendiendo JavaScript` === 'Estoy Aprendiendo JavaScript' // true

```

### ¿Y si usamos el operador > con cadenas de texto?

Aunque no es muy común, podemos usar los operadores > , >=, < y <= para comparar cadenas de texto.

JavaScript comparará las cadenas de texto según el valor de su código Unicode.

Por ejemplo, la letra A tiene un valor de 65 y la letra B tiene un valor de 66. Por lo tanto, la letra A es menor que la letra B. Pero ten cuidado, ya que las letras mayúsculas tienen un valor menor que las letras minúsculas.

```
'Alfa' > 'Beta' // false
'Omega' > 'Beta' // true
'alfa' > 'Alfa' // true
```

### Comparando booleanos

También podemos comparar booleanos con los operadores de comparación.

```
true === true // true
true === false // false
false !== false // false
```

Por si te preguntas cómo se comportan los operadores de mayor o menor que (> y <) con booleanos te diré que, aunque no tiene sentido, debes saber que true es mayor que false.

```
true > false // true
false < true // true
true > true // false
false < false // false
```

## Operadores lógicos en JavaScript

Los operadores lógicos en JavaScript (y en muchos otros lenguajes de programación) se utilizan para evaluar expresiones lógicas.

En JavaScript, hay tres operadores lógicos: AND (&&), OR (||) y NOT (!).

### Operador lógico AND &&

El operador lógico AND se indica con &&. Devuelve true cuando ambos valores que conecta son true.

```
true && true // → true
true && false // → false
false && false // → false
```

### Operador lógico OR ||

El operador lógico OR se indica con || y devuelve true cuando cualquiera de los valores que conecta es true.

```
true || true // → true
true || false // → true
false || false // → false
```

### Operador lógico NOT !

El operador lógico NOT se indica con ! e invierte el valor de un valor booleano. Se pone delante del valor que queremos invertir.

```
!true // → false
!false // → true
```

### Combinando operadores lógicos, aritméticos y de comparación

Los operadores lógicos y los operadores de comparación se pueden combinar para crear expresiones más complejas. Por ejemplo, podemos preguntar si un número está entre dos valores.

```
2 < 3 && 3 < 4 // → true
```

También puedes usar paréntesis para agrupar operaciones y usar operadores lógicos y aritméticos.

```
(2 + 2) < 3 && (10 < (8 * 2)) // → false
```

Igualmente, es importante que sepas que las operaciones aritméticas tienen precedencia sobre las operaciones de comparación.

```
2 + 2 < 3 && 10 < 8 * 2
// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false
```

## Variables

A la hora de crear programas, es vital poder almacenar la información para poder utilizarla en un futuro. En JavaScript, usamos variables para conseguirlo.

existen 3 tipos de variables let, var y const.

### let

Se introdujo en ES6 para declarar variables con alcance de bloque.

```
let nombre = "Juan";

function saludar() {
  let apellido = "Pérez";
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar(); // Imprime "Hola Juan Pérez"

console.log(nombre); // Imprime "Juan"
// console.log(apellido); // Error: apellido no está definido

```

### var

Es la forma tradicional de declarar variables en JavaScript. Se utiliza para crear variables con alcance de función o de caracter global.

```
var nombre = "Juan";

function saludar() {
  var apellido = "Pérez";
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar(); // Imprime "Hola Juan Pérez"

console.log(nombre);
```

### const

Se introdujo en ES6 para declarar variables constantes. No se pueden reasignar después de su inicialización.

```
const PI = 3.14159;

// PI = 3.14; // Error: No se puede reasignar una variable constante

console.log(PI); // Imprime "3.14159"
```

### Hoisting de var

Hoisting es un mecanismo de JavaScript en el que las variables y declaraciones de funciones se mueven a la parte superior de su ámbito antes de la ejecución del código. Esto significa que si hacemos esto:

```
 console.log (saludar);
 var saludar = "dice hola"
```

se interpreta así:

```
var saludar;
console.log(saludar); // saludar is undefined
saludar = "dice hola"
```

Entonces las variables con var se elevan a la parte superior de su ámbito y se inicializan con un valor de undefined.

### Hoisting de let

Al igual que var, las declaraciones let se elevan a la parte superior. A diferencia de var que se inicializa como undefined, la palabra clave let no se inicializa. Sí que si intentas usar una variable let antes de declararla, obtendrás un Reference Error.

## Convenciones y nomenclaturas

En JavaScript, existen diferentes nomenclaturas para nombrar las variables: camelCase, snake_case y SCREAMING_CASE.

camelCase es la forma más común de nombrar las variables en JavaScript. Consiste en escribir la primera palabra en minúsculas y las siguientes palabras con su primera letra en mayúsculas. Por ejemplo:

```
let camelCase = 1
let camelCaseIsCool = 2
let userName = 'midudev'
```

snake_case es una forma de nombrar que consiste en escribir todas las palabras en minúsculas y separarlas con guiones bajos. Por ejemplo:

```
let snake_case = 1
let snake_case_is_cool = 2
let user_name = 'midudev'
```

En algunos lenguajes de programación es muy común usar snake_case para nombrar las variables. En JavaScript no lo es tanto, pero todavía puedes encontrar código que lo use.

Lo más habitual, y es buena idea, es usarlo en los nombres de archivos. Por ejemplo, mi_archivo.js. Esto es porque algunos sistemas operativos distinguen entre mayúsculas y minúsculas y, por tanto, mi_archivo.js y Mi_archivo.js son dos archivos diferentes.

SCREAMING_CASE es una forma de nombrar que consiste en escribir todas las palabras en mayúsculas y separarlas con guiones bajos. Por ejemplo:

```
const SCREAMING_CASE = 1
const SCREAMING_CASE_IS_COOL = 2
const USER_NAME = 'midudev'
```

Para las constantes, con valores que no van a cambiar, es muy común usar SCREAMING_CASE. Así se puede distinguir fácilmente de las variables que sí cambian de valor. Por eso, no debes usarla para nombrar variables con let.

## null y undefined

Mientras que null es un valor que significa que algo no tiene valor, undefined significa que algo no ha sido definido. Por ejemplo, si creamos una variable sin asignarle ningún valor, su valor será undefined:

```
let rolloDePapel // -> undefined
```

También podemos asignar directamente el valor undefined a una variable:

```
let rolloDePapel = undefined // -> undefined
```

En cambio, para que una variable tenga el valor null, sólo podemos conseguirlo asignándole explícitamente ese valor:

```
let rolloDePapel = null
```

Un caso bastante ilustrativo para entender la diferencia entre null y undefined es el siguiente:

https://www.aprendejavascript.dev/images/null-undefined.jpg

## Operador typeof

El operador typeof devuelve una cadena de texto que indica el tipo de un operando. Puede ser usado con cualquier tipo de operando, incluyendo variables y literales.

```
const MAGIC_NUMBER = 7
typeof MAGIC_NUMBER // "number"
```

También puedes usarlo directamente con los valores que quieras comprobar:

```
typeof undefined // "undefined"
typeof true // "boolean"
typeof 42 // "number"
typeof "Hola mundo" // "string"
```

### Usando con operadores de comparación

El operador typeof es muy útil cuando se usa con operadores de comparación. Por ejemplo, para comprobar si una variable es del tipo que esperamos:

```
const age = 42
typeof age === "number" // true
```

Una vez que tenemos expresiones lógicas, podemos empezar a encadenar operadores lógicos para comprobar múltiples condiciones:

```
const age = 42
typeof age === "number" && age > 18 // true
```

## Comentarios

En JavaScript, los comentarios son una forma de agregar explicaciones al código que se ignora al ejecutar el programa.

Los comentarios son útiles para explicar el por qué del código, documentar los cambios realizados en el código y hacer que el código sea más fácil de entender para otros desarrolladores.

### Comentarios de una sola línea //

Los comentarios de una sola línea comienzan con // y se utilizan para agregar una explicación en una sola línea de código. Por ejemplo:

```
// Sólo usamos 6 decimales
const PI = 3.141592

// Iniciamos el radio por 10, pero puede cambiar
let radio = 10
```

También puedes añadir un comentario de una sola línea al final de una línea de código. Por ejemplo:

```
const PI = 3.141592 // Sólo usamos 6 decimales
```

### Comentarios de varias líneas /\* \*/

Los comentarios de varias líneas comienzan con /_ y terminan con _/. Se utilizan para agregar notas explicativas que ocupan varias líneas de código. Por ejemplo:

```
/*
  Este es un comentario de varias líneas.
  Se utiliza para agregar notas explicativas que ocupan varias líneas de código.
*/
```

## Código Condicional con if

El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:

```
if (condición) {
  // código que se ejecuta si la condición es verdadera
}
```

### if, else if, else

```
const edad = 17

if (edad >= 18) {
  console.log('Eres mayor de edad')
} else if (edad >= 16) {
  console.log('Eres casi mayor de edad')
} else {
  console.log('Eres menor de edad')
}
```

## Bucles con while

Un bucle es una estructura de control que permite repetir un bloque de instrucciones. Vamos, repetir una tarea tantas veces como queramos.

En JavaScript, existen varias formas de lograrlo, y una de ellas es el bucle con while. El bucle while es una estructura de control de flujo que ejecuta una sección de código mientras se cumple una determinada condición.

### Sintaxis

La sintaxis del bucle while es similar a la de un condicional if. La única diferencia es que, en lugar de ejecutar el código una sola vez, se ejecuta mientras se cumpla la condición.

```
while (condición) {
  // código a ejecutar mientras se cumpla la condición
}
```

### Ejemplo

```
// iniciamos la variable fuera del bucle
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

console.log('¡Despegue! 🚀')
```

### Saliendo de un bucle con break

Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada break. Cuando el intérprete de JavaScript encuentra la palabra break, sale del bucle y continúa ejecutando el código que haya después.

```
let cuentaAtras = 10

while (cuentaAtras > 0) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break // <---- salimos del bucle
  }
}
```

### Saltando una iteración con continue

Igual que tenemos la posibilidad de "romper" el bucle con break, también podemos saltarnos una iteración con continue. Cuando el intérprete de JavaScript encuentra la palabra continue, salta a la siguiente iteración del bucle.

```
let cuentaAtras = 10

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras)
}
```

## Bucles con do while

Aunque no es muy famoso ni muy utilizado, es interesante que sepas que existe en JavaScript un bucle que se ejecuta al menos una vez, y luego se repite mientras se cumpla una condición. Este bucle se llama do while y tiene la siguiente sintaxis:

```
do {
  // código que se ejecuta al menos una vez
} while (condición);
```

### Ejemplo

```
let respuesta

do {
  respuesta = confirm("¿Te gusta JavaScript?");
} while (respuesta)
```

## Bucles con for

La estructura de control for en JavaScript es muy útil para ejecutar una serie de instrucciones un número determinado de veces. A diferencia de while que usa una condición para determinar si se ejecuta o no el bloque de código, for usa un contador que se incrementa en cada iteración hasta que se cumple una condición.

La sintaxis de for es la siguiente:

```
for (inicialización; condición; actualización) {
  // código a ejecutar
}
```

Importante, fíjate que for tiene tres partes separadas por ;:

- La inicialización se realiza antes de que se inicie el bucle y se utiliza para declarar variables y asignar valores iniciales.

- La condición es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la expresión se evalúa como true, se ejecuta el bloque de código dentro del bucle. Si la expresión se evalúa como false, el bucle termina.

- La actualización se utiliza para actualizar el valor de la variable de control del bucle después de cada iteración. Normalmente, se incrementa o decrementa el valor de la variable de control del bucle.

### Ejemplo

```
for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0
  if (esPar) {
    continue
  }

  // Solo mostramos este consola.log si es impar
  console.log(i)

  // Salimos del bucle al llegar al 7
  if (i === 7) {
    break
  }
}

```

## Switch

En JavaScript, la sentencia switch es una estructura de control que nos permite ejecutar diferentes bloques de código dependiendo del valor de una expresión. Esta estructura es útil cuando queremos realizar diferentes acciones basadas en una única variable.

### Sinstaxis

La sentencia switch evalúa una expresión, comparando el valor con los diferentes casos que le hemos definido. Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia break para separar cada caso y evitar que se sigan evaluando el resto de casos.

```
switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión coincide con valor1
    break

  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break
  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break
}
```

### Ejemplo

```
const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢")
    break
  case 5:
    console.log("¡Hoy es viernes! 🤓")
    break
}
```

### ¡No olvides el break!

```
// ❌ Este código no es correcto
// Lo muestro para que veas qué pasa
// si no pones break en tus casos
const dia = new Date().getDay()

switch (dia) {
  case 0:
    console.log("¡Hoy es domingo! 😴")
  case 1:
    console.log("¡Nooo, es lunes! 😢")
  case 2:
    console.log("¡Hoy es martes! 🥵")
  case 3:
    console.log("¡Hoy es miércoles! 🤓")
  default:
    console.log("Se acerca el fin de! 🚀")
}
```

Si hoy es martes (2), se ejecutarán todos los casos después de ese, ya que no hay ningún break que lo impida. Por lo tanto, el resultado en consola sería:

```
¡Hoy es martes! 🥵
¡Hoy es miércoles! 🤓
Se acerca el fin de! 🚀
```

### El patrón switch(true)

Existe un patrón que se usa a veces con switch que es switch(true). Esto es, en lugar de evaluar una expresión, evalúa una condición ignorando por completo el valor de la expresión.

```
let edad = 25;

switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Eres mayor de edad y eres joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case (edad >= 40):
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default:
    console.log("Eres menor de edad");
}
```

## Tu primera función

Las funciones son uno de los conceptos más importantes en JavaScript y casi cualquier lenguaje de programación.

Una función es un bloque de código que realiza una tarea específica cuando se llama. Puedes pensar en una función como en un microondas: le das algo para cocinar, le pasas algunos parámetros (como el tiempo y la potencia) y luego hace su trabajo y te devuelve el resultado.

En JavaScript, las funciones se pueden definir de varias maneras, pero la forma más común y básica es mediante la palabra clave function. Esta es tu primera función:

```
function saludar() {
  console.log('Hola Miguel')
}
```

Como ves, declarar una función consiste de:

- La palabra reservada function que indica que estamos definiendo una función.
- El nombre de la función, en este caso saludar. Normalmente usamos verbos para nombrar funciones, ya que son acciones que realizan.
- Un par de paréntesis () después del nombre. Pueden contener parámetros. En este caso, no tenemos ninguno.
- Un bloque de código entre llaves {}. En este caso, solo tenemos una línea de código, pero podríamos tener muchas más.

Nuestra función ahora mismo no devuelve nada pero cada vez que la llamemos, imprimirá Hola en la consola.

Para llamar a una función, simplemente escribimos su nombre seguido de paréntesis:

```
saludar() // -> Hola Miguel
saludar() // -> Hola Miguel
saludar() // -> Hola Miguel
```

### Devolviendo un resultado

Las funciones pueden devolver un resultado. Para ello, utilizamos la palabra reservada return y después el valor que queremos devolver:

```
function sumar() {
  return 1 + 1
}
```

Ahora, cada vez que llamemos a la función sumar, nos devolverá el resultado de la suma:

```
// podemos guardar el resultado en una variable
const resultado = sumar()

// o ver en consola directamente el resultado
console.log(sumar()) // -> 2
```

### Parámetros y argumentos

Los valores que se le pasan a una funcion al invocarla se llaman argumentos. Y a los valores que recibe la función, se les llama parámetros.

```
// la función suma tiene dos parámetros: a y b
function sumar(a, b) {
  return a + b
}

// cuando llamamos a la función, le pasamos dos argumentos: 2 y 3
const resultadoSuma = sumar(2, 3)
```

### ¿Qué es una function expression?

Una function expression es una función que se asigna a una variable. Por ejemplo:

```
// esto es una function expression
const sum = function (a, b) {
  return a + b
}

// esto es una declaración de función
function sum(a, b) {
  return a + b
}
```

### ¿Qué es una función de flecha?

Las funciones flecha son una forma más concisa de crear funciones en JavaScript, y se han vuelto muy populares en los últimos años debido a su sintaxis simplificada.

La sintaxis básica de una función flecha es la siguiente:

```
const miFuncionFlecha = () => {
  // código a ejecutar
}
```

En lugar de la palabra clave function, utilizamos una flecha => para definir la función. También podemos omitir los paréntesis alrededor de los parámetros si solo tenemos uno:

```
const saludar = nombre => {
  console.log("Hola " + nombre)
}
```

### Ventajas de las funciones flecha

Las funciones flecha tienen varias ventajas sobre las funciones regulares en JavaScript. Algunas son:

Sintaxis más concisa: la sintaxis de las funciones flecha es más corta y más fácil de leer que la sintaxis de las funciones regulares, especialmente cuando se trabaja con funciones de una sola línea.

Return implícito: las funciones flecha puede devolver el valor de la expresión sin usar la palabra clave return cuando son de una sola línea. Esto hace que las funciones flecha sean aún más cortas y más fáciles de leer.

Funciones anónimas más legibles: las funciones flecha son una forma más legible y concisa de crear funciones anónimas en JavaScript, lo cual puede hacer que nuestro código sea más fácil de entender.

### Return implícito

Cuando una función flecha tiene una sola expresión, podemos omitir las llaves {} y la palabra clave return para hacerla aún más corta. Esto se conoce como return implícito. Vamos a pasar una función regular a una función flecha y vamos a ver cómo se ve finalmente con return implícito:

```
// Declaración de función regular
function sumar(a, b) {
  return a + b
}

// Función flecha
const sumarFlecha = (a, b) => {
  return a + b
}

// Función flecha con return implícito
const sumarFlecha = (a, b) => a + b
```

## Arrays: colecciones de elementos

Para declarar un array usamos los corchetes [] y dentro los elementos de la colección separados por comas ,.

Por ejemplo, para crear una colección de números del 1 al 5:

```
[1, 2, 3, 4, 5]
```

Los elementos de un array pueden ser de cualquier tipo, incluso otros arrays.

```
[1, 2, 3, 4, [5, 6, 7, 8, 9]]
```

Y, aunque no siempre sea recomendable, puedes mezclar tipos de datos dentro:

```
['uno', 2, true, null, undefined]
```

Para asignar un array a una variable, lo hacemos igual que con los otros tipos de datos:

```
const numbers = [1, 2, 3, 4, 5]
let names = ['Dani', 'Miguel', 'Maria']
```

### Acceso a los elementos de un array

Para acceder a los elementos de un array usamos los corchetes [] y dentro el índice del elemento que queremos acceder. Los índices empiezan en 0.

```
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0]) // 1
console.log(numbers[2]) // 3
```

Si intentamos acceder a un elemento que no existe, nos devolverá undefined.

```
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[10]) // undefined
```

Puedes usar variables para acceder a los elementos de un array.

```
const numbers = [1, 2, 3, 4, 5]
let index = 2

console.log(numbers[index]) // 3
```

### Modificar elementos de un array

Igual que podemos acceder a los elementos de un array, podemos modificarlos.

```
const numbers = [1, 2, 3, 4, 5]

numbers[0] = 10
numbers[2] = 30

console.log(numbers) // [10, 2, 30, 4, 5]
```

### Métodos y propiedades de Array

Los arrays de JavaScript tienen una serie de métodos y propiedades que nos permiten trabajar con ellos de forma sencilla.

### La longitud de un array

Puedes conocer la longitud de una colección de elementos usando la propiedad .length:

```
const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log(frutas.length) // 4
```

También puedes cortar su longitud asignando un nuevo valor a la propiedad .length:

```
const frutas = ["manzana", "pera", "plátano", "fresa"]
frutas.length = 2

console.log(frutas) // ["manzana", "pera"]
console.log(frutas.length) // 2
```

### Métodos de arrays

Cuando trabajamos con colecciones de elementos, vamos a querer hacer cosas con ellos. Por ejemplo: añadir un elemento, eliminarlo, buscarlo, etc. Para ello, los arrays tienen una serie de métodos que nos permiten hacer estas operaciones:

### .push()

El método .push() nos permite añadir un elemento al final de un array:

```
const frutas = ["plátano", "fresa"]
frutas.push("naranja")
console.log(frutas) // ["plátano", "fresa", "naranja"]
```

Además, el método .push() devuelve la nueva longitud del array:

```
const frutas = ["plátano", "fresa"]
console.log(frutas.length) // 2

const newLength = frutas.push("naranja")
console.log(newLength) // 3
console.log(frutas) // ["plátano", "fresa", "naranja"]
```

### .pop()

El método .pop() elimina y devuelve el último elemento de un array:

```
const frutas = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop()

console.log(frutas) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"
```

### .shift()

El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop(), pero con el primer elemento en lugar del último:

```
const frutas = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas.shift()

console.log(frutas) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"
```

### .unshift()

El método .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último:

```
const frutas = ["plátano", "fresa", "naranja"]
frutas.unshift("manzana")

console.log(frutas) // ["manzana", "plátano", "fresa", "naranja"]
```

### concat o destruct

## Iteración de Arrays en JavaScript

### Bucle while

El bucle while vimos que permitía ejecutar un bloque de código mientras una condición era verdadera. En el caso de la iteración de arrays, la condición generalmente se basa en el índice del elemento.

Podemos, por ejemplo, crear una variable con let para guardar un puntero al índice del elemento que estamos iterando. En cada iteración, podemos incrementar el valor de la variable en 1, para que en la siguiente iteración se imprima el siguiente elemento.

```
let frutas = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutas.length) {
  console.log(frutas[i]) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}
```

### Bucle for

El bucle for nos permitía ejecutar un bloque de código un número determinado de veces. En el caso de la iteración de arrays, podemos usarlo para recorrer cada uno de los elementos del array, usando la longitud del array como condición.

```
let frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}
```

También podrías recorrer el array en orden inverso, empezando desde el último elemento hasta el primero, usando i-- en lugar de i++.

```
let frutas = ['🍎', '🍌', '🍓']

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}
```

### Bucle for...of

Además de while y for, existe otra estructura de control que nos permite iterar sobre los elementos de un array: for...of. Esta estructura de control es más simple que for, ya que no necesitamos crear una variable para guardar el índice del elemento que estamos iterando.

Es mucho más sencilla y fácil de entender:

```
let frutas = ['🍎', '🍌', '🍓']

for (let fruta of frutas) {
  console.log(fruta) // imprime el elemento en la posición i
}
```

### El método array.forEach()

Ya hemos visto en la clase anterior que los arrays tienen métodos que nos permiten realizar operaciones sobre ellos, como añadir elementos o eliminarlos. Pero tiene muchos más métodos que iremos viendo que nos ayuda a trabajar con ellos.

Uno de esos métodos es array.forEach(), que nos permite ejecutar una function para cada uno de los elementos del array. Esta función recibe como parámetros el elemento que se está iterando en ese momento, el índice del elemento y el propio array.

```
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta) // imprime el elemento en la posición i
})
```

Usando una arrow function e indicando sólo los parámetros que necesitamos de nuestra función podemos simplificarlo aún más:

```
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach((fruta) => {
  console.log(fruta) // imprime el elemento en la posición i
})
```

## Objetos

Los objetos en JavaScript son una colección de propiedades y métodos que definen un elemento a través de una clave y un valor.

Por ejemplo, si pensamos en una persona, podemos definir sus propiedades como su nombre, su edad, su altura, su peso, etc. Y sus métodos como caminar, correr, saltar, etc.

### Declaración y asignación de objetos

Para declarar un objeto usamos las llaves {} y dentro las propiedades y métodos separados por comas ,. Cada propiedad o método se define con una clave y un valor separados por dos puntos :.

Por ejemplo, vamos a crear un objeto que represente a una persona:

```
const persona = {
  name: 'Dani',
  age: 30,
  isWorking: true
}
```

Las propiedades y métodos de un objeto pueden ser de cualquier tipo de JavaScript, incluso otros objetos o arrays.

```
const persona = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'], // array
  address: { // otro objeto
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  }
}
```

Y, claro, como hemos comentado antes, también podemos tener funciones. Cuando una función es parte de un objeto se le llama método.

```
const persona = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'],
  address: {
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  },
  walk: function () { // <- método
    console.log('Estoy caminando')
  }
}
```

### Acceder a propiedades y métodos de un objeto

Para acceder a las propiedades y métodos de un objeto usamos el punto . y el nombre de la propiedad o método.

```
const persona = { name: 'Dani' }
console.log(persona.name) // Dani
```

Si intentamos acceder a una propiedad o método que no existe, nos devolverá undefined.

```
const persona = { name: 'Dani' }
console.log(persona.fullName) // -> undefined
```

Puedes usar variables para acceder a las propiedades y métodos de un objeto. Para ello, tienes que usar la notificación por corchetes [].

```
const persona = { name: 'Dani' }
let property = 'name'

console.log(persona[property]) // -> Dani
```

También necesitas usar los corchetes si la clave de la propiedad o método tiene espacios o caracteres especiales.

```
const persona = { 'full name': 'Dani' }

console.log(persona['full name']) // -> Dani

// ❌ no puedes hacer esto
// persona.full name
```

Igual que las propiedades, puedes acceder a los métodos de un objeto usando cualquiera de las dos formas anteriormente comentadas:

```
const persona = {
  name: 'Dani',
  walk: function () {
    console.log('Estoy caminando')
  }
}

persona.walk() // -> Estoy caminando

let method = 'walk'
persona[method]() // -> Estoy caminando
```

### Añadir y modificar propiedades de un objeto

Igual que podemos acceder a las propiedades de un objeto, podemos añadir nuevas propiedades o modificar las existentes.

```
const persona = { name: 'Dani' }

persona.age = 30

console.log(persona) // -> { name: 'Dani', age: 30 }
```

En el código estamos modificando el objeto persona añadiendo la propiedad age con el valor 30.

### Eliminar propiedades de un objeto

Para eliminar una propiedad de un objeto usamos la palabra reservada delete.

```
const persona = { name: 'Dani', age: 18 }

delete persona.age

console.log(persona) // -> { name: 'Dani' }
```

### Iterando Objetos en JavaScript

El manejo de objetos es uno de los pilares en JavaScript y es crucial conocer cómo podemos iterar o recorrer los mismos. Existen varias formas de hacerlo y en esta clase vamos a revisar algunas de las más comunes: el bucle for...in y los métodos Object.keys(), Object.values() y Object.entries().

### Iterando con for...in

La estructura de control for...in nos permite crear un bucle que itera sobre todas las propiedades enumerables de un objeto, en un orden arbitrario.

```
const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense']
}

for (const property in spiderman) {
  console.log(`${property}: ${spiderman[property]}`);
}

// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense
```

### Transformar un objeto en un array

A veces queremos transformar un objeto en un array para poder iterar sobre él. Para esto podemos utilizar el método Object.keys(), Object.values() o Object.entries().

Cada uno de estos métodos retorna un array, pero cada uno de ellos contiene elementos diferentes. Vamos a verlos uno por uno.

### Iterar con Object.keys()

El método Object.keys() retorna un array con las propiedades enumerables de un objeto.

```
const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense']
}

const properties = Object.keys(spiderman)

console.log(properties.length) // 3

properties.forEach(property => {
  console.log(property)
})

// -> name
// -> universe
// -> powers
```

### Iterando con Object.values()

El método Object.values() retorna un array con los valores correspondientes a las propiedades enumerables de un objeto.

```
const values = Object.values(spiderman)

values.forEach(value => {
  console.log(value)
})

// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]
```

Como ves, la diferencia con Object.values() es que este método retorna los valores y Object.keys() retorna las propiedades.

### Iterando con Object.entries()

El método Object.entries() retorna un array de arrays, donde cada subarray es un par [propiedad, valor] correspondiente a las propiedades enumerables de un objeto.

```
const entries = Object.entries(spiderman)

entries.forEach(entry => {
  console.log(entry)
})

// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]
```

Lo interesante es que este método nos da acceso tanto a las propiedades como a los valores. Lo puedes ver más claro en el siguiente ejemplo:

```
const entries = Object.entries(spiderman)

entries.forEach(entry => {
  const property = entry[0]
  const value = entry[1]

  console.log(`${property}: ${value}`)
})
```

### Operador de Encadenamiento Opcional O Null check operator , ?.

El Operador de Encadenamiento Opcional ?. permite leer el valor de una propiedad ubicada profundamente dentro de una cadena de objetos conectados, sin tener que validar expresamente que cada referencia en la cadena es válida.

```
const gamesystem = {
  name: 'PS5',
  price: 550,
  specs: {
    cpu: 'AMD Ryzen Zen 2',
    gpu: 'AMD Radeon RDNA 2',
  }
}

console.log(gamesystem.specifications?.cpu)
// -> undefined
console.log(gamesystem.specs?.cpu)
// -> AMD Ryzen Zen 2
```

Si la propiedad specifications no existe, el operador ?. devuelve undefined y no se produce ningún error. Si la propiedad existe, el operador ?. devuelve el valor de la propiedad.

```
const user = {
  name: 'Peter',
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      push: false,
      marketing: undefined
    }
  }
}

// la forma clásica de acceder a una propiedad anidada
// de forma segura
let email = undefined
if (user && user.settings &&
  user.settings.notifications &&
  user.settings.notifications.email) {
  email = user.settings.notifications.email
}

console.log(email) // -> true

// con Optional Chaining Operator
const email = user?.settings?.notifications?.email
console.log(email) // -> true
```

### El operador in para comprobar si una propiedad existe

Otra forma de comprobar si una propiedad existe es usando el operador in. Este operador comprueba si una propiedad existe en un objeto y devuelve true o false:

```
const gamesystem = {
  name: 'PS5',
  price: 550,
  specifications: undefined,
}

console.log('name' in gamesystem) // -> true
console.log('specifications' in gamesystem) // -> false
console.log('specs' in gamesystem)


if (
  'specifications' in gamesystem &&
  gamesystem.specifications !== undefined &&
  gamesystem.specifications !== null) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}
```

## Asincronismo

En JavaScript, el asincronismo significa que las operaciones pueden ejecutarse sin bloquear el hilo principal. Esto permite que la interfaz de usuario siga respondiendo mientras se realizan otras tareas en segundo plano

Ejemplo:

Imaginemos que queremos cargar una imagen desde un servidor. La descarga puede tardar unos segundos, pero no queremos que la interfaz de usuario se bloquee mientras tanto.

```
// Función para cargar una imagen
function cargarImagen(url) {
  // Simulamos una descarga de 2 segundos
  setTimeout(() => {
    // La imagen se ha cargado
    // ...
  }, 2000);
}

// Llamamos a la función
cargarImagen("https://ejemplo.com/imagen.jpg");

// La interfaz de usuario sigue respondiendo mientras se carga la imagen

```

## Promesas

Las promesas son un objeto que representa el resultado eventual de una operación asincrónica. Se pueden usar para manejar el flujo de control y evitar el "callback hell".

Ejemplo:

Usando promesas, podemos reescribir el código anterior de una forma más elegante:

```
// Función para cargar una imagen
function cargarImagen(url) {
  return new Promise((resolve, reject) => {
    // Simulamos una descarga de 2 segundos
    setTimeout(() => {
      if (false) {
        resolve(url);
      } else {
        reject(new Error("Error al cargar la imagen"));
      }
    }, 2000);
  });
}

// Llamamos a la función y manejamos la promesa
cargarImagen("https://ejemplo.com/imagen.jpg")
  .then((imagen) => {
    console.log("todo melo = ", imagen);
  })
  .catch((error) => {
    console.log("Me muero por x o y razo = ", error);
  });

```

## fetch()

Una vez que aprendemos a realizar peticiones HTTP mediante XHR nos damos cuenta que es un mecanismo muy interesante y útil, y que nos abre un mundo de posibilidades trabajando con Javascript. Sin embargo, con el tiempo nos vamos dando cuenta también, que la forma de trabajar con objetos XMLHttpRequest, aunque es muy potente requiere mucho trabajo que hace que el código no sea tan legible y práctico como quizás debería.

Entonces es cuando surge fetch, un sistema más moderno, basado en promesas de Javascript, para realizar peticiones HTTP asíncronas de una forma más legible y cómoda.

### Peticiones con el método fetch()

Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verbose. La forma de realizar una petición es muy sencilla, básicamente se trata de llamar a fetch y pasarle por parámetro la URL de la petición a realizar:

```
const promise = fetch("/robots.txt");

promise.then(function(response) {
  /* ... */
});
```

El fetch() devolverá una Promise que será aceptada cuando reciba una respuesta y sólo será rechazada si hay un fallo de red o si por alguna razón no se pudo completar la petición.

El modo más habitual de manejar las promesas es utilizando .then(), aunque también se puede utilizar async/await. Esto se suele reescribir de la siguiente forma, que queda mucho más simple y evitamos constantes o variables temporales de un solo uso:

fetch("/robots.txt")
.then(function(response) {
/** Código que procesa la respuesta **/
});

Al método .then() se le pasa una función callback donde su parámetro response es el objeto de respuesta de la petición que hemos realizado. En su interior realizaremos la lógica que queramos hacer con la respuesta a nuestra petición

### Headers

Fetch permite enviar cabeceras HTTP con las peticiones. Las cabeceras son información adicional que se envía al servidor junto con la petición.

```
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  // body: JSON.stringify(update), POST
};

fetch("https://api.github.com/users/manishmshiva", options)
  // Exito
  .then((response) => response.json()) // convertir a json
  .then((json) => console.log(json)) //imprimir los datos en la consola
  .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
```


## Async/Await

Async/Await es una sintaxis introducida en ECMAScript 2017 que permite escribir código asincrónico de una forma más síncrona y fácil de leer. Se basa en dos palabras clave:

* async: Indica que una función es asíncrona y puede devolver una promesa.
* await: Permite esperar a que una promesa se resuelva antes de continuar con la ejecución del código.

```
async function obtenerDatos() {
  const respuesta = await fetch("https://api.ejemplo.com/datos");
  const datos = await respuesta.json();
  return datos;
}

async function main() {
  const datos = await obtenerDatos();
  console.log(datos);
}

main();
```

