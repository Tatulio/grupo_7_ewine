const {Router} = require("express");

const router = Router();
const {profile} = require("../controllers/profile");

router.get("/profile", profile)




module.exports = router