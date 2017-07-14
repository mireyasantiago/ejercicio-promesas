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

var plantilla=
'<div class="col-md-offset-3 col-md-6">' +
  '<div class="thumbnail">' +
    '<img src="assets/img/planeta1.jpg" alt="#" class="img-circle">' +
    '<div class="caption">' +
      '<h3>__nombre__</h3>' +
      '<p>__radio__</p>' +
      '<p>__densidad__</p>' +
    '</div>' +
  '</div>' +
'</div>' ;

/*
var imagenPlaneta=[
  {
    "imagen": "assets/img/planeta1.jpg"
  },
  {
    "imagen": "assets/img/planeta2.jpg"
  },
  {
    "imagen": "assets/img/planeta3.jpg"
  },
  {
    "imagen": "assets/img/planeta4.jpg"
  },
  {
    "imagen": "assets/img/planeta5.jpg"
  },
  {
    "imagen": "assets/img/planeta6.jpg"
  }

];
*/

/*para poder acceder a todos los planetas*/
getJSON("data/earth-like-results.json")


.then(function(response){

 var arreglObjeto=( response.results.map(function(url){
    return getJSON(url)
  }));
  return Promise.all(arreglObjeto);
})







.then(function(arrayPromises){
  //console.log(arrayPromises)
  /*nombre del contenedor*/
  var contenedorPlanetas= document.getElementById('mostrandoPlanetas');
  var plantillaFinal= " ";
  arrayPromises.forEach(function(planeta){
  //console.log(planeta.pl_name)

// console.log(imagenPlaneta)
  var nombre= planeta.pl_name;
  var radio= planeta.pl_rade;
  var densidad= planeta.pl_dens;




  //console.log(radio + " " + nombre + " " + densidad);



plantillaFinal += plantilla.replace("__nombre__",nombre)
 .replace("__radio__",radio)
 //.replace("__imagen__", imagenPlaneta)
 .replace("__densidad__",densidad);
  contenedorPlanetas.innerHTML += plantillaFinal;



  });
});

/*
var imagen= imagenPlaneta.map(function(obj){
  return imagenPlaneta[0];
});
var imagenes= imagenPlaneta.resultado.map(function(obj){
  return obj.imagen[0];
});
console.log(imagenes);
*/





/*para acceder a un planeta en especifico
getJSON("data/earth-like-results.json")
.then(function(mensaje){return(getJSON(mensaje.results[0]))})
.then(function(resultado){console.log(resultado)})*/
