const product = require("../models/product")
const file = require("../models/file")

module.exports = {
    carrito: (req,res) => {
        product.all()
        .then((resultado) => {
            res.render("carrito", {
                styles: ["carrito"],
                title: "Carrito de Compras",
                products: resultado})
            })
    },

    show: (req,res) => {
        product.search("id", req.params.id).then((resultado) => {
            return resultado ? 
            res.render("vino", {
            styles: ["vino"],
            title: "Vino | " +resultado.name,
            product: resultado 

        }) : res.render("error",{
            msg: "Producto no encontrado"
        })
    })}



}