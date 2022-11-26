console.log("cargando configuración")
// import dependencies 
const express = require('express');
const router = require('./routes/routerUser');
// load config app Web 
const appConfig = require("./config");
var bodyParser = require('body-parser');

console.log("inicializar la aplicación Web");
// star web app  
require("./db/dbInitializer");
const app = express();  
console.log("configurando routers");
// metodo http (verbos http)
// ruta virtual 
// el algoritmo  que yo programo para responder la petición 

const userRouter= require("./routes/routerUser");

// configurar los router de la app 

app.use(bodyParser.json());

app.use("/api/usuarios", userRouter); 
app.get("/", (req, res) => {
  res.send('Home!')
});


  console.log("iniciando servidor");

 let server=  app.listen(appConfig.PORT, () => {
    console.log(`Example app listening on port ${appConfig.PORT}`)
  });

