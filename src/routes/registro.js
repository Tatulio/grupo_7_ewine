const {Router} = require("express");
const router = Router();
const {registro} = require("../controllers/registro");

router.get("/registro", registro)


module.exports = router