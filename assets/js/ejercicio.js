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

getJSON("data/earth-like-results.json")


.then(function(response){

  var arreglObjeto=( response.results.map(function(url){
    return getJSON(url)
  }));
  return Promise.all(arreglObjeto);
})


.then(function(arrayPromises){

  var contenedorPlanetas= document.getElementById('mostrandoPlanetas');
  var plantillaFinal= " ";
  arrayPromises.forEach(function(planeta){

    var nombre= planeta.pl_name;
    var radio= planeta.pl_rade;
    var densidad= planeta.pl_dens;


    plantillaFinal += plantilla.replace("__nombre__",nombre)
    .replace("__radio__",radio)

    .replace("__densidad__",densidad);
    contenedorPlanetas.innerHTML += plantillaFinal;



  });
});
