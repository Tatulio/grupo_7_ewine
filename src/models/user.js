const path= require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const {body} = require("express-validator");
const file = require("./file");

const db = require("../database/models/index") 

const model = {
    // file: path.resolve(__dirname, "../data", "users.json"),
    // read: (data) => fs.readFileSync(model.file, "utf-8"),
    // write: data => fs.writeFileSync(model.file, JSON.stringify(data, null, 2)),
    // all: () => JSON.parse(model.read()),
    search: (prop,value) => db["user"].findOne({
        where: {
          [prop]: value
        }
      }),
    generated: data => Object({        
        email : String(data.email),
        password: bcrypt.hashSync(data.password, 10),
        nombre: data.nombre,
        apellido: data.apellido,
        isAdmin: String(data.email).includes("@ewine.com"),
        isActive: true,
        //image: data.files.map(f => file.create(f).id)
    }),

    create: data => db["user"].create(model.generated(data)).then((resultado) => resultado),
    // create: async data => {
    //     const jane = await db["user"].build(model.generated(data));
    //     jane.save()
    //     return jane
//},
    validate: [
        body("email").isEmail().withMessage("El email no es valido"),
        body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),

    ]

}

module.exports = model;