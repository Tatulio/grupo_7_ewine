module.exports = {
    registro: (req,res) => res.render("users/register", {
        styles: ["register"],
        title: "Registrarse"
    })
}