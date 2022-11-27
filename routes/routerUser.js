const express = require("express");
const router= express.Router();
//cargar el  schema 
let userSchema = require("../db/schemas/userSchema");

router.get("/get/:idUser",async function(req, res) {
    let idUser = req.params.idUser;
    let result = await userSchema.findUserById(idUser)
    res.json(result);
});
router.get("/all",async function(req, res) {
    let result = await userSchema.getAllUser();
    res.json(result);
});

module.exports = router;