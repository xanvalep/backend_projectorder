const express = require("express");
const router= express.Router();
const db = require('../baseDatos');



//leer usuario

router.get("/get/:idUsuario", (req,res) => {
   let idUsuario = req.params.idUsuario;
   let usuario = db.getUser(idUsuario);
   res.json(usuario);
   res.status(200); 
 
});

//crear usuario

router.post("/create", (req,res) => {
   let newUser = req.body;
  let id = db.createUser(newUser);
  //  res.send(id); 
 //  req;
  res.send("create");
});

module.exports = router ;
