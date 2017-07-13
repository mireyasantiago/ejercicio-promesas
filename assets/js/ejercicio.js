
function getJSON(url) {
    return new Promise(function(resolve,  reject) {
        var ajax = new XMLHttpRequest();
        var url = "data/earth-like-results.json";
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
.then(function(mensaje){
  mensaje.results.forEach(function(resultadoFinal){
    getJSON(resultadoFinal).then(function(planetas){console.log(planetas)});
  });
})



/*para acceder a un planeta en especifico
getJSON("data/earth-like-results.json")
.then(function(mensaje){return(getJSON(mensaje.results[0]))})
.then(function(resultado){console.log(resultado)})*/
