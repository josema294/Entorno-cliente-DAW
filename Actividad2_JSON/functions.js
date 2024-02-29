//Funcion para realizar la carga del json
export function cargaJson(url) {


}
    
  // fetch(url).then(response => {
  //   // esta ok ??
  //   if (!response.ok) {
  //     throw new Error('Error obteniendo json');
  //   }
  //   // Devuelve los datos
  //   return response.json();
  // })
  // .then(data => {
  //   // Maneja los datos recibidos
  //   console.log(data);
  //   return data
  // })
  // .catch(error => {
  //   console.error('problema en el manejo del json', error);
  // });}

fetch (url).then(response =>{
  console.log(response)
})