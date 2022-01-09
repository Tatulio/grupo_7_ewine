const path = require("path")
const express = require("express")

const app = express()


app.set("port", process.env.PORT || 9000) 


app.listen(app.get("port"), () => console.log("listening on port http:localhost:" + app.get("port")))

app.use(express.static(path.resolve(__dirname,"./public")))

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname,"./views","home.html")))

app.get("/registro", (req, res) => res.sendFile(path.resolve(__dirname,"./views","registro.html")))

app.get("/ingresar", (req, res) => res.sendFile(path.resolve(__dirname,"./views","ingresar.html")))

app.get("/carrito", (req, res) => res.sendFile(path.resolve(__dirname,"./views","carrito.html")))

app.get("/nosotros", (req, res) => res.sendFile(path.resolve(__dirname,"./views","nosotros.html")))

app.get("/producto", (req, res) => res.sendFile(path.resolve(__dirname,"./views","producto.html")))