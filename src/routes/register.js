const {Router} = require("express");
const router = Router();
const {registro} = require("../controllers/register");

router.get("/register", registro)


module.exports = router