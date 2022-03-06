const product = require("../models/product")

module.exports = {
    product: (req,res) => {
        product.all()
        .then((resultado) => {
            //res.send(resultado)
            res.render("products/list", {
                styles: ["products/list"],
                title: "Administrador",
                products: resultado})
            })
    }}