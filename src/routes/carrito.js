const {Router} = require("express");
const router = Router();
const {carrito} = require("../controllers/carrito");

router.get("/carrito", carrito)


module.exports = router