const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");
const userModel = require("../models/user");
const access = require('../middlewares/access')
const auth = require("../middlewares/auth");
const {body} = require("express-validator")
const path = require("path")
const multer = require("multer")
const upload = multer({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, "../../uploads/users")),
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now()+ path.extname(file.originalname))
})})

const validate = [
    body("email").isEmail().withMessage("El email no es valido"),
    body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
    body("nombre").isLength({min: 1}).withMessage("El nombre es obligatorio"),
    body("apellido").isLength({min: 1}).withMessage("El apellido es obligatorio"),
  ]

  const validate2 = [
    body("email").isEmail().withMessage("El email no es valido"),
    body("password").isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
  ]
router.get("/",[auth], user.index)

router.get("/login", user.login)
router.get("/register", user.register)
router.get("/profile",[access], user.profile)

router.post("/", [upload.any()], validate, user.save)
router.post("/access",[validate2], user.access)
router.post("/logout", user.logout)



module.exports = router