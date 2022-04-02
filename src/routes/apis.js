const {Router} = require("express");
const router = Router();
const api = require("../controllers/apis");
const path = require("path")
const multer = require("multer")
const auth = require("../middlewares/auth");
const access = require("../middlewares/access")



router.get("/users", api.users) // http://localhost/api/users

router.get("/users/:id", api.userDetail) // http://localhost/api/users/id

router.get("/products", api.products) // http://localhost/api/users

router.get("/products/:id", api.productDetail) // http://localhost/api/users/id

//router.post("/", [upload.any()], product.save)



//router.post("/update/:id", product.modify)

//router.post("/delete/:id", product.delete)

module.exports = router