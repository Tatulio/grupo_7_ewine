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
    },

    show: (req,res) => {
        product.search("id", req.params.id).then((resultado) => {
            return resultado ? res.render("vino", {
            styles: ["vino"],
            title: "Vino | " +resultado.name,
            product: resultado

        }) : res.render("error",{
            msg: "Producto no encontrado"
        })
    })}
}