import express from "express"
import jwt from "jsonwebtoken"
import {    createuser, deleteall, deleteone, getall, getone, login, signup, update } from "../controller/users.controller.js"
import { upload } from "../middleware/upload.js"

const router = express.Router()
const sec = process.env.SECRET_KEY

const authenticate = (req,res,next)=>{
  const header = req.headers.authorization
  if(!header) return res.status(400).json({message:"invalid token"})
    const token = header.split(" ")[1]

    jwt.verify(token,sec,(err,decoded)=>{
      if(err) return res.status(400).json({message:"unavailable token"})
        req.user=decoded
      next()
    })
}

router.post("/create",createuser)
router.delete("/deleteone/:id",deleteone)
router.delete("/deleteall",deleteall)
router.get("/getall",getall)
router.get("/getone/:id",getone)
router.put("/update/:id",update)
router.post("/signup",signup)
router.post("/login",login)

router.post("/images",upload.array("file",5),(req,res)=>{
    if(!req.files  || req.files.length === 0){
      return  res.status(400).json({message:"fies was empty"})
    }
    res.status(201).json({message:"fies was uploadid" ,files:req.files})

})
export default router