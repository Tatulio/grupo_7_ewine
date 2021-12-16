const express = require("express");
const app =  express();
const path = require('path');
const { allowedNodeEnvironmentFlags } = require("process");

app.set("port",3040);

app.listen(app.get("port"),()=> console.log ("servidor corriendo"))

app.get("/",(req,res)=>{res.sendFile(path.resolve(__dirname,"./views", "home.html"))})  

app.use(express.static(path.resolve(__dirname,"./public")));


app.get("/productos",(req,res)=>{res.sendFile(path.resolve(__dirname,"./views", "productos.html"))})  