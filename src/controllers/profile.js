module.exports = {
    profile: (req,res) => res.render("users/profile", {
        styles: ["profile"],
        title: "Perfil"
    })
}