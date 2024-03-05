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

//eventLoop

// console.log('Tarea 1');

// setTimeout(()=> console.log("Tarea 2"),0);

// Promise.resolve().then(()=> console.log("Microtarea 1"));

// console.log('Tarea 3');

// Promise.resolve().then(()=> console.log("Microtarea 2"));

// // asincronismo

// console.log("foo");

// setTimeout(function () {
//   console.log("bar");
// }, 0);

// console.log("zeta");

// // Función para cargar una imagen Try Catch
// function cargarImagen(url) {
//   return new Promise((resolve, reject) => {
//     // Simulamos una descarga de 2 segundos
//     setTimeout(() => {
//       if (false) {
//         resolve(url);
//       } else {
//         reject(new Error("Error al cargar la imagen"));
//       }
//     }, 2000);
//   });
// }

// // Llamamos a la función y manejamos la promesa
// cargarImagen("https://ejemplo.com/imagen.jpg")
//   .then((imagen) => {
//     console.log("todo melo = ", imagen);
//   })
//   .catch((error) => {
//     console.log("Me muero por x o y razo = ", error);
//   });
