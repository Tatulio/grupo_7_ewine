const product = require("../models/product")
const tipo_vino = require("../models/tipo_vino")
const file = require("../models/file")
const bodega = require("../models/bodega")
const varietal = require("../models/varietal")
const apis = require("../models/apis")

const controller = {
    users: (req,res) => {
        apis.usersAll()
        .then((resultado) => {           
                res.json(resultado)
             })
    },
    userDetail: (req,res) => {
        apis.userDetail(req.params.id)
        .then((resultado) => res.json(resultado))
    },
    products: (req,res) => {
        apis.productsAll()
        .then((resultado) => {
            res.json(resultado)
        })
    },
    productDetail: (req,res) => {
        apis.productDetail(req.params.id)
        .then((resultado) => res.json(resultado))
    },
}  

module.exports = controller