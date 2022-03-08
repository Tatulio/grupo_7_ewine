const path = require("path")
const fs = require("fs");
const file = require("./file");

const db = require("../database/models/index") 


const model = {        
                       
    all: () => db["bodega"].findAll({raw : true})
        .then((resultado) => {
        return resultado;
    }),
    
}

module.exports = model