const {Router} = require("express");
const router = Router();
const {catalogo} = require("../controllers/catalogo");

router.get("/", catalogo)


module.exports = router