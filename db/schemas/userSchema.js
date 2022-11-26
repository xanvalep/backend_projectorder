//cargamos la libreria
let mongoose = require("mongoose");
//cargamos la clase de esquma
let Schema = mongoose.Schema;
//definir la configuracion del esquema 
let schemaConfig= {
username: String,
password: String,
email: String,
firstName: String,
};

let schema = new Schema(schemaConfig);