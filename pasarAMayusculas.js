var fs = require('fs');

var stream = fs.createReadStream("temp.txt");
var copia = fs.createWriteStream("tempMayus.txt");

var resultado = '';

stream.on('data', function (data) {
	// body...
	resultado += data.toString().replace(/[aeiou]/g, function(ocurrencia){return ocurrencia.toUpperCase()});
});

stream.on('end', function() {
	//console.log(resultado);
	copia.write(resultado);
});
