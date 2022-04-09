const {Router} = require("express");
const router = Router();
const catalogo = require("../controllers/catalogo");
const path = require("path")
const auth = require("../middlewares/auth");
const access = require("../middlewares/access")

router.get("/", catalogo.product)

router.get("/:id", catalogo.show)


module.exports = router