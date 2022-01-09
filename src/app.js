const path = require("path");
const express = require("express");
const method = require("method-override");
const app = express();

app.set("view engine", "ejs");
app.set("views" , path.resolve(__dirname, "views"));
app.set("port", process.env.PORT || 9000);

app.listen(app.get("port"), () => console.log("listening on port http://localhost:" + app.get("port")))

app.use(express.static(path.resolve(__dirname,"../public")))
app.use(express.urlencoded({extended: true}))
app.use(method("m")) // ?m=PUT -- ?m=DELETE

const mainRoutes = require("./routes/main")                                                         /*otra forma de usarlo en playground*/
app.use(mainRoutes)

const carritoRoutes = require("./routes/carrito")                                                         /*otra forma de usarlo en playground*/
app.use(carritoRoutes)

const nosotrosRoutes = require("./routes/nosotros")                                                         /*otra forma de usarlo en playground*/
app.use(nosotrosRoutes)

const productoRoutes = require("./routes/producto")                                                         /*otra forma de usarlo en playground*/
app.use(productoRoutes)

const registroRoutes = require("./routes/registro")                                                         /*otra forma de usarlo en playground*/
app.use(registroRoutes)


