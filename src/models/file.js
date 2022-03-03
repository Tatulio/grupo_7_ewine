const path = require("path")
const fs = require("fs");
const db = require("../database/models/index")
const { Console } = require("console");
const model = {        
    /*file: path.resolve(__dirname, "../data","files.json"),
    read: () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)), 
    all: () => JSON.parse(model.read()),
    search: (prop, value) => model.all().find(element => element [prop] == value),
    generate: data => Object({
        //id: model.all().length == 0 ? 1 : model.all().pop().id +1,
        image: data,
    }),*/
    create: (data,id) => {
        console.log(data,id)
        db["product"].update({
            image: data}
        ,{
            where: {id: id}
        })
        /*let newImage = model.generate(data)
        let all = model.all();
        all.push(newImage);
        model.write(all)
        return newImage*/
    },
} 


module.exports = model