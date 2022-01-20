const path = require("path");
const express = require("express");
const method = require("method-override");
const app = express();

app.set("view engine", "ejs");
app.set("views" , path.resolve(__dirname, "views"));
app.set("port", process.env.PORT || 9000);

app.listen(app.get("port"), () => console.log("listening on port http://localhost:" + app.get("port")))

app.use(express.static(path.resolve(__dirname,"../public")))
app.use("/uploads", express.static(path.resolve(__dirname,"../uploads")))
app.use(express.urlencoded({extended: true}))
app.use(method("m")) // ?m=PUT -- ?m=DELETE


const mainRoutes = require("./routes/main")                                                        
app.use(mainRoutes)

const carritoRoutes = require("./routes/carrito")                                                        
app.use(carritoRoutes)

const nosotrosRoutes = require("./routes/nosotros")                                                         
app.use(nosotrosRoutes)

const productoRoutes = require("./routes/vino")                                                         
app.use(productoRoutes)

const registroRoutes = require("./routes/registro")                                                         
app.use(registroRoutes)

const productRoutes = require("./routes/product")                                                         
app.use("/products",productRoutes)

const filesRoutes = require("./routes/files")                                                         
app.use("/files",filesRoutes)