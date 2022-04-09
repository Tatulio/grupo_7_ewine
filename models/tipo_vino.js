const db = require("../database/models/index") 


const model = {        
                       
    all: () => db["tipo_vino"].findAll({raw : true})
        .then((resultado) => {
        return resultado;
    }),
    
}

module.exports = model