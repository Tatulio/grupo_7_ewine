const {Router} = require("express");
const router = Router();
const {vino} = require("../controllers/vino");

router.get("/vino", vino)


module.exports = router