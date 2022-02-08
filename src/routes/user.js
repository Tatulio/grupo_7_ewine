const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");
const userModel = require("../models/user");
const access = require('../middlewares/access')
const auth = require("../middlewares/auth");
const path = require("path")
const multer = require("multer")
const upload = multer({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, "../../uploads/users")),
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now()+ path.extname(file.originalname))
})})

router.get("/",[auth], user.index)

router.get("/login", user.login)
router.get("/register", user.register)
router.get("/profile",[access], user.profile)

router.post("/", [upload.any()], user.save)

router.post("/",[userModel.validate], user.save)
router.post("/access",[userModel.validate], user.access)
router.post("/logout", user.logout)



module.exports = router