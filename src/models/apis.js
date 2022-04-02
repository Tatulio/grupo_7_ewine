const db = require("../database/models/index")
const Sequelize = require('sequelize');


const model = {        
                       
    usersAll: () => db["user"].findAll({
        attributes: ['id', 'nombre', 'apellido', 'email'],
        raw : true
        })
        .then(resultado => {
            resultado.forEach(e => { 
                e.imageURL = "http://localhost:9000/api/users/"+e.id
            })
            return resultado
    }),

    userDetail: (id) => db["user"].findByPk(id,{
        attributes: ['id','nombre', 'apellido','email','image'],
        raw : true
    })
        .then((resultado) => {
            var objetoResult = {
                user: resultado,
                imageURL: "http://localhost:9000/uploads/users/"+resultado.image
            }
            delete objetoResult.user.image
            return objetoResult
        }),
    
    productsAll: () => db["product"].findAll({
        raw : true,
        include: [{
            model: db['tipo_vino'], as: "tipoVino1", attributes: ['name']},{
            model: db['bodega'], as: "tipoBodega", attributes: ['name']},{
            model: db['varietal'], as: "tipoVarietal", attributes: ['name']}]
        })
        .then(resultado => {
            resultado.forEach(e => { 
                e.imageURL = "http://localhost:9000/api/products/"+e.id
                delete e.image
            })
            var apiResult = [{count: resultado.length, counCat:{Malbec: 0, CabernetSauvignon: 0, Merlot: 0, Syrah: 0, Chardonnay: 0, SauvignonBlanc: 0, PinotNoir: 0},products: resultado}]           
            for (i=0; i < resultado.length; i++){
                resultado[i]['tipoVarietal.name'] == 'Cabernet Sauvignon' ? apiResult[0].counCat['CabernetSauvignon'] ++ : null
                resultado[i]['tipoVarietal.name'] == 'Malbec' ? apiResult[0].counCat['Malbec'] ++ : null
                resultado[i]['tipoVarietal.name'] == 'Merlot' ? apiResult[0].counCat['Merlot'] ++ : null
                resultado[i]['tipoVarietal.name'] == 'Syrah' ? apiResult[0].counCat['Syrah'] ++ : null
                resultado[i]['tipoVarietal.name'] == 'Chardonnay' ? apiResult[0].counCat['Chardonnay'] ++ : null
                resultado[i]['tipoVarietal.name'] == 'Sauvignon Blanc' ? apiResult[0].counCat['SauvignonBlanc'] ++ : null
                resultado[i]['tipoVarietal.name'] == 'Pinot Noir' ? apiResult[0].counCat['PinotNoir'] ++ : null
            }
            return apiResult
    }),
    productDetail: (id) => db["product"].findByPk(id,{
        raw : true,
        include: [{
            model: db['tipo_vino'], as: "tipoVino1", attributes: ['name']},{
            model: db['bodega'], as: "tipoBodega", attributes: ['name']},{
            model: db['varietal'], as: "tipoVarietal", attributes: ['name']}]
    })
        .then((resultado) => {
            var objetoResult = {
                product: resultado,
                imageURL: "http://localhost:9000/uploads/products/"+resultado.image
            }
            delete objetoResult.product.image
            return objetoResult
        })
}

module.exports = model