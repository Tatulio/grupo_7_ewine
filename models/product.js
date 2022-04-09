const db = require("../database/models/index") 


const model = {        
                       
    all: () => db["product"].findAll({include: ['tipoVino1','tipoBodega' ,'tipoVarietal']})
        .then((resultado) =>  {
            return resultado;
    }),

    generate: data => Object({
        name: data.name,
        anno: parseInt(data.anno),
        varietal: data.tipoVino != "Vacio" ? parseInt(data.varietal) : null,
        tipoVino: data.tipoVino != "Vacio" ? parseInt(data.tipoVino) : null,
        bodega: data.tipoVino != "Vacio" ? parseInt(data.bodega) : null,
        notasCata: data.notasCata,
        maridaje: data.maridaje,
        price: parseInt(data.price),
        offert: data.offert ? true : false,
        destacado: data.destacado ? true : false,
        recomendaciones: data.recomendaciones ? true : false,
    }),

    create: data => db["product"].create(model.generate(data)).then((resultado) => resultado),
    
    search: (prop,value) => db["product"].findByPk(value,{include: ['tipoVino1','tipoBodega' ,'tipoVarietal']}).then((r) => r),
    
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