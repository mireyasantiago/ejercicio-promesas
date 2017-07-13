/*se importa express y path
var express = require('express');
var path = require('path');
var app = express();
app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/index.html');
});

app.listen(3000);

app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'assets')));

*/


/*se importa express y path para el ejercicio de manu*/
var express = require('express');
var app = express();
var path = require('path');

app.use("/data", express.static(__dirname + "/data"));
/*para buscar en ...*/
app.use('/modules', express.static(path.join(__dirname,'node_modules')));
app.use('/assets', express.static(path.join(__dirname,'assets')));



app.get('/', function (req, res){
  res.sendFile(__dirname+'/index.html');
});

app.listen(3000);
