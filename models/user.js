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

    update: (id, data) => db["user"].update(
      {
      email: data.email,
      nombre: data.name,
      apellido: data.apellido,
      },
      {
          where: {id: id}
      })
      .then((resultado) => {
        console.log(data.name)
      return id
  }),    
  delete: id => db["user"].destroy({
      where:{id: id}
  }), 

    validate: [
        body("email").isEmail().withMessage("El email no es valido"),
        body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
        body("nombre").isLength({min: 1}).withMessage("El nombre es obligatorio"),
        body("apellido").isLength({min: 1}).withMessage("El apellido es obligatorio"),
      ]

}

module.exports = model;