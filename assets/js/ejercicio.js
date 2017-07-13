function getJSON(url) {
    return new Promise(function(resolve,  reject) {
        var ajax = new XMLHttpRequest();

        ajax.open("GET", url);
        ajax.send();
        ajax.onreadystatechange = function(data) {
            if (ajax.readyState == 4) {
                resolve(JSON.parse(ajax.responseText));
            };
        };
    });
};


/*para poder acceder a todos los planetas*/
getJSON("data/earth-like-results.json")
.then(function(response){

 var arreglObjeto=( response.results.map(function(url){
    return getJSON(url)
  }));
  return Promise.all(arreglObjeto);
})

.then(function(arrayPromises){
  console.log(arrayPromises)
  arrayPromises.forEach(function(planeta){
  console.log(planeta.pl_name)
  var nombre= planeta.pl_name;
  var radio= planeta.pl_rade;
  var densidad= planeta.pl_dens;
 console.log(radio + " " + nombre + " " + densidad);


  mostrarTotalPlanetas({
    nombre: nombre,
    radio: radio,
    densidad: densidad
  });


  });
});


var plantilla=
'<div class="col-md-offset-3 col-md-6">' +
  '<div class="thumbnail">' +
    '<img src="assets/img/imagen.png" alt="#" class="img-circle">' +
    '<div class="caption">' +
      '<h3>__nombre__</h3>' +
      '<p>__radio__</p>' +
      '<p>__densidad__</p>' +
    '</div>' +
  '</div>' +
'</div>' ;


/*nombre del contenedor*/
var contenedorPlanetas= document.getElementById('mostrandoPlanetas');

var mostrarTotalPlanetas= function(datos){

  var plantilaFinal= " ";

    plantillaFinal += replace("__nombre__", datos.nombre)
    .replace("__radio__", datos.radio)
    .replace("__densidad__", datos.densidad)
    contenedorPlanetas.innerHTML(plantillaFinal);

};



/*para acceder a un planeta en especifico
getJSON("data/earth-like-results.json")
.then(function(mensaje){return(getJSON(mensaje.results[0]))})
.then(function(resultado){console.log(resultado)})*/
