import bcrypt from "bcryptjs"
import User from "../models/user.js"

export const register = async (req,res)=>{
  try {
    const {username,password} = req.body
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = new User
    ({username,password:hashPassword,isMfaActive:false})
    console.log(newUser,"NEw USER")
    await newUser.save()
    res.status(201).json({
      message:"user register successfully"
    })
  } catch (error) {
    res.status(500).json({
      error:"error registering user",
      message:error
    })
  }

}
export const login = async (req,res)=>{

}
export const logout = async (req,res)=>{

}
export const setup2FA = async (req,res)=>{

}
export const verify2FA = async (req,res)=>{

}
export const reset2FA = async (req,res)=>{

}

export const authStatus = async (req,res)=>{

}
