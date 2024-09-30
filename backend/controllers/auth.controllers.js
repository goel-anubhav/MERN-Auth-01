import { User } from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { sendVerificationEmail } from "../mailtrap/emails.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendWelcomeEmail, sendPasswordResetEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All Fields Are not filled correctly");
    }

    const UserAlreadyExists = await User.findOne({ email });
    if (UserAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // Fixed comma
    });

    await user.save();

    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: {
        ...user.toObject(), // Fixed user.doc issue
        password: undefined, // Remove password from response
      },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }
    user.isVerified = true;
    user.verificationTokenExpiresAt = undefined;
    user.verificationToken = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({
      success: true,
      message: "Email Verified Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({message:"Server Not Responding"})
  }
};

export const login = async (req, res) => {
  const {email, password} = req.body;
  try{
    const user = await User.findOne({email});
    if(!user){
     return res.status(400).json({success:false , message:"User Doesn't Exists"})
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if(!isPasswordValid){
      return res.status(400).json({success:false, message:"Invalid Credentials"})
    }

    generateTokenAndSetCookie(res, user._id);
    user.lastlogin = new Date();
    await user.save();

    res.status(200).json({
      success:true,
      message:"Logged In successfully",
      user:{
        ...user._doc,
        password:undefined,
      }
    })

  }catch(error){
    console.log("Error in loggin in:", error)
    res.status(400).json({success:false, message: error.message})
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({success:true, message:"Logout Successfully"})
};

export const forgotPassword = async(req, res)=>{
const {email} = req.body;
try{
  const user = await User.findOne({email});
  if(!user){
    res.status(400).json({success:false, message:"User Doesn't Exist"})
  }
  const resetToken = crypto.randomBytes(20).toString("hex");
  const resetTokenExpiresAt= Date.now()+1*60*60*1000; //1 hour

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpiresAt = resetTokenExpiresAt;

  await user.save();

  // Send Email

  await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`)
  res.status(200).json({success:true, message:"Reset Email Sent Successfully"})
}catch(error){
  res.status(400).json({success:false, message:"Reset Email Not sent"})
}
}



// ------------------------ Pendinf ----------------
export const resetPassword = async(req, res)=>{
  try {
    const {token} = req.params;
    const {password} = req.body;

    const user = await User.findOne({
      resetPasswordToken
    })
  } catch (error) {
    
  }
}