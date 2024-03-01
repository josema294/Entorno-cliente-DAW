export function cargaJson(url) {
  return fetch(url) 
    .then(response => {
      if (response.status === 200) {
        console.log("json recibido status 200");
        return response.json(); 
      } else {
        console.log("Estatus no 200, revisar");
        throw new Error('Respuesta de red OK pero respuesta HTTP no es OK');
      }
    })
    .then(json => {
      return json; 
    });
}
