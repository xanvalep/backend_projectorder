//cargar libreria
let mongoose = require("mongoose");
//cargar config
let appConfig = require("../config");


let connectionPromise = mongoose.connect(appConfig.fullUrl);

connectionPromise.then(function (result) {
    console.log(" db conect succefully ");
    console.log(result);
}).catch(function(err){
    console.log("error connecting with DB");
    console.log(err);
})