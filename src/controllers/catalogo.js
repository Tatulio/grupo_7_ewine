module.exports = {
    catalogo: (req,res) => res.render("catalogo", {
        styles: ["catalogo"],
        title: "Nuestro Catalogo"
    })
}