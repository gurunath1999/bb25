import express, { Request, Response } from 'express'
import { User } from '../models/userModel'
import bcrypt from 'bcryptjs'


export const register=async(req:Request,res:Response)=>{

    try {
        const {username,email,password}=req.body
        if(!username||!email||!password){
            return res.status(401).json({message:'enter vaild data'})
        }

        const verifyMail=await User.findOne({email})
        if(verifyMail){
            return res.status(401).json({message:'this email already exist'})
        }
const hashPassword=await bcrypt.hash(password,10)
        const newUser=new User({
            username,email,password:hashPassword

        })

        await newUser.save()

        return res.status(201).json({message:'data added successfully'})
    } catch (error) {
        return res.status(505).json({message:'internal server error'})
    }

}
