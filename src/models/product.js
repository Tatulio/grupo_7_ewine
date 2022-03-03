const path = require("path")
const fs = require("fs");
const file = require("./file");

const db = require("../database/models/index") 


const model = {        
    /*file: path.resolve(__dirname, "../data","products.json"),
    read: () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),*/                        
    all: () => db["product"].findAll({raw : true}).then((resultado) => {
        return resultado;
    }),
    generate: data => Object({
        name: data.name,
        anno: parseInt(data.anno),
        varietal: data.varietal,
        tipoVino: data.tipoVino,
        bodega: data.bodega,
        notasCata: data.notasCata,
        maridaje: data.maridaje,
        price: parseInt(data.price),
        offert: data.offert ? true : false,
        destacado: data.destacado ? true : false,
        recomendaciones: data.recomendaciones ? true : false,
    }),

    create: data => db["product"].create(model.generate(data)).then((resultado) => resultado),
    
    search: (prop,value) => db["product"].findOne({
        where: {
          [prop]: value
        }
    }),

    update: (id, data) => db["product"].update(
        {
        name: data.name,
        anno: parseInt(data.anno),
        varietal: data.varietal,
        tipoVino: data.tipoVino,
        bodega: data.bodega,
        notasCata: data.notasCata,
        maridaje: data.maridaje,
        price: parseInt(data.price),
        offert: data.offert ? true : false,
        destacado: data.destacado ? true : false,
        recomendaciones: data.recomendaciones ? true : false,
        },{
            where: {id: id}
        })
        .then((resultado) => {
        return id
    }),    
    delete: id => db["product"].destroy({
        where:{id: id}
    }) 
}

module.exports = model