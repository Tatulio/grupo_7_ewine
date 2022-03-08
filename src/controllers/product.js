const product = require("../models/product")
const tipo_vino = require("../models/tipo_vino")
const file = require("../models/file")
const bodega = require("../models/bodega")
const varietal = require("../models/varietal")

const controller = {
    product: (req,res) => {
        product.all()
        .then((resultado) => { //res.send(resultado)
                res.render("products/list", {
                    styles: ["products/list"],
                    title: "Administrador",
                    products: resultado})
             })
    },
    create: (req,res) => {
        let bodegas = {}
        let varietales = {}
        bodega.all().then(r => bodegas = r)
        varietal.all().then(r => varietales = r)
        tipo_vino.all()
        .then((resultado) => { res.send(varietales)
        //     res.render("products/create", {
        //     styles: ["products/create"],
        //     title: "Nuevo Producto", tipo_vino: resultado, bodegas: bodegas, varietales: varietales})   
         })
        .catch ((err) => console.log(err))
    },
    save:(req,res) => {
        product.create(req.body).then((resultado) => {
            if (req.files[0]) { file.create(req.files[0].filename, resultado.id,'product')}    
            return res.redirect("/products/" +resultado.id)})    
    },
    show: (req,res) => {
        product.search("id", req.params.id).then((resultado) => {
            return resultado ? 
            res.render("products/detail", {
            styles: ["products/detail"],
            title: "Producto | " +resultado.name,
            product: resultado

        }) : res.render("error",{
            msg: "Producto no encontrado"
        })
    })},
    update: (req,res) => {
        product.search("id", req.params.id)
        .then((resultado) => {
            res.render("products/update", {
                styles: ["products/update"],
                title: "Actualizar",
                product: resultado,
            })
    })
    },
    modify: (req,res) => {
        product.update(req.params.id,req.body)
        .then ((resultado) => {
            console.log(resultado)
            return res.redirect("/products/" +resultado)    
        })
    },
    delete: (req,res) => {
        product.delete(req.params.id).then((resultado) => {
        return res.redirect("/products/")
    })}

}  

module.exports = controller