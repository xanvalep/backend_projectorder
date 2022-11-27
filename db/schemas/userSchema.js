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
// creamos el schema
const userSchema = new Schema(schemaConfig);
//creacion del modelo
let userModel = new mongoose.model("usuario",userSchema);

/***************************************************************/
async function createUser (UsernewUser) {
    try {
        //definicion de modelo
        let newUser = new userModel(UsernewUser);
        //llenado del modelo
        newUser.firstName = UsernewUser.firstName;
        newUser.email = UsernewUser.email;
        newUser.password = UsernewUser.password;
        newUser.username = UsernewUser.username; 
        //guardado del modelo 
        let result = await newUser.save();
    return result;
    } catch (error) {
        console.log(error);
        return {};
    }
}
async function deleteUser (id) {
    try {
        let result = await userModel.findByIdAndRemove(id).exe;
        return result;
    } catch (error) {
        console.log(error);
        return {};
    }
}
async function findUserById (id) {
    try {
        let cursor = userModel.findById(id).cursor();
        let user = await cursor.next();
        return user;
    } catch (error) {
        console.log(error);
        return {};
    }
}
async function getAllUser () {
    try {
        //definicion de modelo 
        let filter={};
        let cursor = userModel.find(filter).cursor();
        let result = [];
        let currentUser = await cursor.next();
        while (currentUser != null) {
            result.push(currentUser);
            currentUser = await cursor.next();
        }
        return result;
    } catch (error) {
        console.log(error);
        return {};
    }
}
async function getUser (id) {}

/***************************************************************/

//exportamos
module.exports= {
    userSchema,
createUser,
deleteUser,
getAllUser,
getUser,
findUserById,

};
