const express=require("express");

const router=express.Router();

const whatsappControllers=require("../controllers/whatsappControllers.js");

//Como se ha mencionado, whatsapp  para usar la API se requiere dos métodos el de verifican token y recibir. Para ello, el get y post.
//Get es para trear desde APU CLOUD el token y POST para enviar un recurso de que se ha recibido el token.


router
.get("/",whatsappControllers.verifyToken)
.post("/",whatsappControllers.reciveMessage)

module.exports=router;
