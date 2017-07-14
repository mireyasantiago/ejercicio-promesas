var url= "data/earth-like-results.json";
/*recibe la cadena de la url como unico parametro
y devuelve una promesa*/
fetch(url).then(function(respuesta){
  return respuesta.getJSON();
/*cuando se completa devuelve una promesa como  respuesta */
}).then(function(datos){
  console.log(datos.pl_name);
}).catch(function(){
  console.log("fallo y es un aerror!!!");
});
