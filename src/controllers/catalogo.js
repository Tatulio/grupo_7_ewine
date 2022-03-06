const product = require("../models/product")

module.exports = {
    product: (req,res) => {
        product.all()
        .then((resultado) => {
            //res.send(resultado)
            res.render("catalogo", {
                styles: ["catalogo"],
                title: "Administrador",
                products: resultado})
            })
    }}