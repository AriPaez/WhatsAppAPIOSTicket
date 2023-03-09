const express=require("express");
const app=express();


 app.use(express.json());


const apiRoute=require("./routes/routes.js");
const PORT=process.env.PORT || 3000;


app.use("/whatsapp",apiRoute);

app.listen(PORT,()=>{console.log("El puerto es:"+PORT)})