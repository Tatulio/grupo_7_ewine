const product = require("../models/product")
const file = require("../models/file")

    
module.exports = {
    index: (req,res) => {
        product.all()
        .then((resultado) => {
            res.render("home", {
                styles: ["home"],
                title: "Ewine",
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