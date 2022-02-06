const path= require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const validator = require("express-validator");

const model = {
    file: path.resolve(__dirname, "../data", "users.json"),
    read: (data) => fs.readFileSync(model.file, "utf-8"),
    write: data => fs.writeFileSync(model.file, JSON.stringify(data, null, 2)),
    all: () => JSON.parse(model.read()),
    search: (prop,value) => model.all().find(element => element[prop] == value),
    generated: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        email : String(data.email),
        password: bcrypt.hashSync(data.password, 10),
        nombre: data.nombre,
        apellido: data.apellido,
        isAdmin: String(data.email).includes("@ewine.com"),
        isActive: true
    }),
    create: data => {
    let all = model.all();
    let user = model.generated(data);
    all.push(user);
    model.write(all);
    return user
},
    validate: [
        validator.body("email").isEmail().withMessage("El email no es valido"),
        validator.body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),

    ]

}

module.exports = model;