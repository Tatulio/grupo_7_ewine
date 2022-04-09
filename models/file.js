const path = require("path")
const fs = require("fs");
const db = require("../database/models/index")
const { Console } = require("console");
const model = {        
    create: (data,id,tabla) => {
        console.log(data,id,tabla)
        db[tabla].update({
            image: data}
        ,{
            where: {id: id}
        })
    },
} 

module.exports = model