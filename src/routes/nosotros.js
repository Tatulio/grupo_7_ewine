const {Router} = require("express");
const router = Router();
const {nosotros} = require("../controllers/nosotros");

router.get("/nosotros", nosotros)


module.exports = router