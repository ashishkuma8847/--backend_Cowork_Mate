import Users from "../models/users.js";

import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
const sec = process.env.SECRET_KEY


export const signup = async (req,res)=>{
    try {
        const {name,email,password}=req.body
        const data = await Users.findOne({where:{email}})
        if(data) return res.status(400).json({message:"user alrady exist"}) 
        
        const hashdata = await bcrypt.hash(password,10)
        if(!hashdata) return res.status(400).json({message:"password not hash"})
            
            const user = await Users.create({name,email,password:hashdata})
            if(!user)return res.status(400).json({message:"user not cerater",user:user}) 
                res.status(201).json({message:"user created",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
    }
}

export const login = async (req,res)=>{
    try {
        const {email,password}=req.body
        const data = await Users.findOne({where:{email}})
        if(!data) return res.status(400).json({message:"user is not found"}) 
        
        const compare = await bcrypt.compare(password,data.password)
        if(!compare) return res.status(400).json({message:"password not matched.."})
            
           const jst= jwt.sign({id:data.id,email:data.email},sec,{expiresIn:"1h"})
            res.status(201).json({message:"login successfull",token:jst,data:data.id}) 

    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
    }
}

export const createuser = async (req,res)=>{
    try {
const {name ,email,password}=req.body
const user = await Users.create({name,email,password})
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}



export const deleteone = async (req,res)=>{
    try {
const {id}=req.params
const user = await User.destroy({where:{id}})
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}

export const deleteall = async (req,res)=>{
    try {
const user = await User.destroy({where:{ }})
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}

export const getall = async (req,res)=>{
    try {
const user = await User.findAll()
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}


export const getone = async (req,res)=>{
    try {
        const {id}= req.params
const user = await User.findOne({where:{id}})
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}


export const update = async (req,res)=>{
    try {
        const {id}= req.params
        const {name,email,password}=req.body
const user = await User.findOne({where:{id}})
if(!user)return res.status(400).json({message:"user not created"})
 const data =await User.update({name,email,password},{where:{id}})
    res.status(200).json({message:"user cerated successfully",data:data})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}



//////////////////////////////////////////////



////////////////////////////////////////////////////////

