module.exports = {
    index: (req,res) => res.render("home", {
        styles: ["home"],
        title: "Ewine"
    })
}