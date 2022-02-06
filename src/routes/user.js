const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");
const userModel = require("../models/user");

router.get("/login", user.login)
router.get("/register", user.register)
router.get("/profile", user.profile)

router.post("/",[userModel.validate], user.save)
router.post("/access",[userModel.validate], user.access)
router.post("/logout", user.logout)


module.exports = router