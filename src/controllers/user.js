
const validator = require("express-validator");
const user = require("../models/user");
const bcrypt = require("bcrypt")

module.exports= {
    index: (req,res) => res.send(user.all()),


    login: (req,res) => res.render("users/login",{
        styles: ["register"],
        title: "Inciar sesion"
    }),
    register: (req,res) => res.render("users/register",{
        styles: ["register"],
        title: "Registro"
    }),
    profile: (req,res) => res.render("users/profile",{
        styles: ["register"],
        title: "Perfil de " + req.session.user.nombre
    }),
    access: (req,res) => {
        
        let errors = validator.validationResult(req)
    
        if(!errors.isEmpty()){
            return res.render("users/login"),{
                errors: errors.mapped(),
                styles: ["register"],
                
            }
        }
        
        let exist =user.search("email",req.body.email)
    
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
             password:{msg:"password is not valid"},
         }
     })
 }
if (req.body.remember){
    res.cookie("email",req.body.email,{maxAge: 1000*60*60*24*7})
}

    req.session.user = exist

    return res.redirect("/")

    },
    save: (req,res) => {
        
     let errors = validator.validationResult(req)


    
    if(!errors.isEmpty()){
        return res.render("users/register"),{
            errors: errors.mapped(),
            styles: ["register"],
            
        }
    }

    let exist =user.search("email",req.body.email)

    if(exist){
        return res.render("users/register",{
            styles: ["register"],
            errors:{
                email:{msg: "El email ya existe",
            },
         
        }
        })
    
}   
    let userRegistred = user.create(req.body)


   return res.redirect("/users/login")

 },
    logout: (req,res) => {
        delete req.session.user
        res.cookie('email',null,{maxAge:-1})
        return res.redirect('/')
    },
}