const {Router} = require("express");
const router = Router();
const product = require("../controllers/product");
const path = require("path")
const multer = require("multer")
const auth = require("../middlewares/auth");
const access = require("../middlewares/access")
const upload = multer({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, "../../uploads/products")),
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now()+ path.extname(file.originalname))
})})


router.get("/", [auth], product.product)

router.get("/create",[auth], product.create)

router.get("/:id", product.show)

router.get("/update/:id",[auth], product.update)

router.put("/:id", product.modify)

router.post("/", [upload.any()], product.save)

router.delete("/", product.delete)

module.exports = router