const {validationResult} = require("express-validator");
const user = require("../models/user");
const bcrypt = require("bcrypt")
const file = require("../models/file")


module.exports= {
    index: (req,res) => res.send(user.all()),


    login: (req,res) => res.render("users/login",{
        styles: ["register"],
        title: "Inciar sesion", 
    }),
    register: (req,res) => res.render("users/register",{
        styles: ["register"],
        title: "Registro",
    }), 
    save: (req,res) => {
        let errors = validationResult(req) 
        if(!errors.isEmpty()){
            return res.render("users/register",{
                errors: errors.mapped(),
                styles: ["register"],
                oldData: req.body
            })
        }    
        user.search("email",req.body.email).then((exist) => {
           if(exist){
            return res.render("users/register",{
                styles: ["register"],
                errors:{
                    email:{msg: "El email ya existe",
                },
              }
            })        
        }   
        req.body.files = req.files;        
        user.create(req.body).then((r) => {
            if (req.files[0]) {file.create(req.files[0].filename, r.id,'user')}
        return res.redirect("/users/login")    
    }) 
    })},
    profile: (req,res) => 
        res.render("users/profile",{
        styles: ["profile"],
        title: "Perfil de " + req.session.user.nombre,
        user: {...req.session.user,
     }
    }),
    access: async (req,res) => {
                
        let errors = validationResult(req)
        
        if(!errors.isEmpty()){
            return res.render("users/login",{
                errors: errors.mapped(),
                styles: ["register"],
                
            })
        }
        
        let exist = await user.search("email",req.body.email)
    
        if(!exist){
        return res.render("users/login",{
            styles: ["register"],
            errors:{
                email:{msg: "El email no existe",
            }
        }
        })
    
    }
    
    if (!bcrypt.compareSync(req.body.password, exist.password)){
     return res.render("users/login", {
        styles: ["register"], 
        errors:{
             password:{msg:"La password es invalida"},
            },
        oldData: req.body
        })
    }
    if (req.body.remember){
    res.cookie("email",req.body.email,{maxAge: 1000*60*60*24*7})
    }

    req.session.user = exist

    return res.redirect("/")

    },
    modify: (req,res) => { 
        console.log(req.body)
        user.update(req.params.id,req.body)
        .then ((resultado) => {
            console.log(resultado)
            delete req.session.user
            res.cookie('email',null,{maxAge:-1})
            return res.redirect('/')           
        })
    },
    delete: (req,res) => {
        user.delete(req.params.id).then((resultado) => {
        return res.redirect("/users/")
    })},
    update: (req,res) => {
        user.search("id", req.params.id).then((resultado) => {
            return resultado ? 
            res.render("users/update", {
            styles: ["register"],
            title: "Editar perfil de " + resultado.nombre + " " + resultado.apellido,
            user: resultado 

        }) : res.render("error",{
            msg: "Usuario no encontrado"
        })
    })},
    logout: (req,res) => {
        delete req.session.user
        res.cookie('email',null,{maxAge:-1})
        return res.redirect('/')
    },
}