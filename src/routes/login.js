const {Router} = require("express");
const router = Router();
const {registro} = require("../controllers/login");

router.get("/login", registro)


module.exports = router