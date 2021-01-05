'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 9091;

//mongodb+srv://root:root@cluster0.ksnf0.mongodb.net/qrfast?retryWrites=true&w=majority
//'mongodb://localhost:27017/qrfast

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@cluster0.ksnf0.mongodb.net/qrfast?retryWrites=true&w=majority',{useMongoClient: true}).then(()=>{
		console.log("La conexión a la base de datos está funcionando correctamente...");
		app.listen(port, function(){
			console.log("Servidor del api en http://localhost:"+port);
		});
	}).catch(err => console.log(err));