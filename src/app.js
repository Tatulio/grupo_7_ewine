const path = require("path");
const express = require("express");
const method = require("method-override");
const app = express();
const cookie = require("cookie-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views" , path.resolve(__dirname, "views"));
app.set("port", process.env.PORT || 9000);

app.listen(app.get("port"), () => console.log("listening on port http://localhost:" + app.get("port")))

app.use(express.static(path.resolve(__dirname,"../public")))
app.use("/uploads", express.static(path.resolve(__dirname,"../uploads")))
app.use(express.urlencoded({extended: true}))
app.use(method("m")) // ?m=PUT -- ?m=DELETE

app.use(cookie());
app.use(session({
    secret: "digital",
    saveUninitialized: true,
    resave: false,
 })) 

 app.use (require("./middlewares/user"))

 app.use(require("./routes/main"));
 app.use("/users", require("./routes/user"));



const mainRoutes = require("./routes/main")                                                        
app.use(mainRoutes)

const carritoRoutes = require("./routes/carrito")                                                        
app.use(carritoRoutes)

const nosotrosRoutes = require("./routes/nosotros")                                                         
app.use(nosotrosRoutes)

const productoRoutes = require("./routes/vino")                                                         
app.use(productoRoutes)

const productRoutes = require("./routes/product")                                                         
app.use("/products",productRoutes)

const catalogoRoutes = require("./routes/catalogo")
app.use("/catalogo",catalogoRoutes)

const filesRoutes = require("./routes/files")                                                         
app.use("/files",filesRoutes)

const userRoutes = require("./routes/user")
app.use("/users",userRoutes)

const db = require("./database/models")
const sequelize = require("sequelize") 
const op = sequelize.Op

const mysql = require("mysql")


const conexion = mysql.createConnection({
    host: "localhost",
    database: "ewine_db",
    user : "root",
    password: "",   
})
conexion.connect(function(error){
    if(error){
        throw error ;
    }else {console.log("coneccion existosa");
}

})

conexion.query("SELECT * FROM users" , function(error, resultado, fields){
    if(error)
    throw error;

    resultado.forEach(resultados => {
        console.log(resultados.id, resultados.nombre, resultados.email,resultados.isAdmin, resultados.isActive, resultados.image)
    })  })

conexion.end;

