const path= require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const {body} = require("express-validator");
const file = require("./file");

const db = require("../database/models/index") 

const model = {

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
    }),

    create: data => db["user"].create(model.generated(data)).then((resultado) => resultado),

    validate: [
        body("email").isEmail().withMessage("El email no es valido"),
        body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
        body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
        body("apellido").notEmpty().withMessage("El apellido es obligatorio"),

    ]

}

module.exports = model;