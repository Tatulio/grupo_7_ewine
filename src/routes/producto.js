const {Router} = require("express");
const router = Router();
const {producto} = require("../controllers/producto");

router.get("/producto", producto)


module.exports = router