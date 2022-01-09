module.exports = {
    carrito: (req,res) => res.render("carrito", {
        styles: ["carrito"],
        title: "Carrito de Compras"
    })
}