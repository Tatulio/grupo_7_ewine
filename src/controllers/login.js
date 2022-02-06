module.exports = {
    registro: (req,res) => res.render("users/login", {
        styles: ["register"],
        title: "Iniciar Sesion"
    })
}