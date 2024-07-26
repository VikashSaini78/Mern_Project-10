const router = require("express").Router()
const userC = require("../controllers/user")
const adminC = require("../controllers/admin")


router.get("/",userC.homePageController)
router.post("/regnsert",userC.regController)
router.post("/checkuser",userC.userCheckController)
router.post("/insertProduct",adminC.productinsertController)
router.get("/productdata",adminC.ProductDataController)
router.get("/updateform/:id",adminC.UpdateFormController)
router.put("/updateproductdata/:id",adminC.updateProductController)
router.delete("/AdminproductDelect/:id",adminC.DelectProductContoroller)
router.get("/allProducts",adminC.allProductsController)
router.post("/queryFormData",adminC.queryFormController)
router.get("/queryData",adminC.queryDataCollection)
router.post("/querydata/:query",adminC.queryreplyController)
router.get("/userData",adminC.userDataContoller)
router.get("/updateStatus/:id",adminC.userstatusController)


module.exports = router