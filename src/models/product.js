const path = require("path")
const fs = require("fs");
const file = require("./file");

const model = {        
    file: path.resolve(__dirname, "../data","products.json"),
    read: () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),                        
    all: () => JSON.parse(model.read()),
    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id +1,
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
        image: data.files.map(f => file.create(f).id)
    }),
    create: data => {
        let newProduct = model.generate(data);
        let all = model.all();
        all.push(newProduct);
        model.write(all)
        return newProduct
    },
    search: (prop, value) => model.all().find(element => element [prop] == value),
    update: (id,data)=> {
        let all = model.all();
        let updated = all.map(element => {
            if(element.id == id) {
                element.name = data.name;
                element.anno = data.anno;
                element.varietal = data.varietal;
                element.tipoVino = data.tipoVino;
                element.bodega = data.bodega;
                element.notasCata = data.notasCata;
                element.maridaje = data.maridaje;
                element.price = data.price;
                element.offert = data.offert ? true : false;
                element.destacado = data.destacado ? true : false;
                element.recomendaciones = data.recomendaciones ? true : false;
                return element
            }
            return element
        })
        model.write(updated)
        let product = model.search ('id',id);
        return product
    },
    delete: id => model.write(model.all().filter(element => element.id != id))
    
}

module.exports = model