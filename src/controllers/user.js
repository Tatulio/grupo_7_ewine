
const validator = require("express-validator");
const user = require("../models/user");

module.exports= {
    login: (req,res) => res.render("users/login"),
    register: (req,res) => res.render("users/register"),
    profile: (req,res) => res.render("users/profile"),
    access: (req,res) => {
        let errors = validator.validationResult(req).mapped();
    
        if(errors.length > 0){
            return res.render("users/register"),{
                errors
                
            }
        , {
            styles:["register"],
            title:"Iniciar Sesion"
        }}
        let exist = user.search("email",req.body.email)
    if(!exist){
        return res.render("users/register",{
            errors:{
                email:{msg: "El email no existe",
            }
        }
        })
    
}
if (req.body.remember){
    res.cookie("email",req.body.email,{maxAge: 1000*60*60*24*7})
}
req.session.user = exist;
return res.send(req.session.user)
    },
    save: (req,res) => {
     let errors = validator.validationResult(req).mapped();
    
    if(errors.length > 0){
        return res.render("users/register"),{
            errors
            
        }
    }

    let exist =user.search("email",req.body.email)
    if(exist){
        return res.render("users/register",{
            errors:{
                email:{msg: "El email ya existe",
            }
        }
        })
    
}
    let userRegistred = user.create(req.body)

   return  res.send({
            errors:errors,
            data: req.body,
            user: userRegistred,
            msg: "llego del register"
        })

 },
    logout: (req,res) => res.send({
        data:req.session,
        msg:"llego del perfil"
    }),
}