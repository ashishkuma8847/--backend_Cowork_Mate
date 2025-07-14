import express from "express"
import { createProduct, deleteProduct, getallproduct, updateProduct ,getoneproduct} from "../controller/productitems.controller.js"


const router = express.Router()


router.post("/createproduct",createProduct)
router.delete("/deleteproduct/:id",deleteProduct)
router.put("/updateproduct/:id",updateProduct)
router.get("/getallproduct",getallproduct)
router.get("/getoneproduct/:id",getoneproduct)

export default router

