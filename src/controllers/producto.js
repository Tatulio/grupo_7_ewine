module.exports = {
    producto: (req,res) => res.render("producto", {
        styles: ["producto"],
        title: "Producto"
    })
}