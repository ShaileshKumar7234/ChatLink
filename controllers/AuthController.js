import UserModel from "../models/User.js";
import bcrypt from 'bcryptjs';

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || !req.file) {
      return res.status(400).json({
        success: false,
        message: `${!name ? 'Name' : !email ? 'Email' : !password ? 'Password' : ""} is required`,})

      }
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    const BaseUrl=`${req.protocol}://${req.get("host")}`;
    const imagePath=`${BaseUrl}/images/${req.file.filename}`;

    const hashPassword=await bcrypt.hash(password,10); 

    const user = await UserModel({ name, email, password : hashPassword, profile : imagePath }).save();
    return res
      .status(201)
      .json({ success: true, message: "User registered successfully", user });
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `${!email ? 'Email' : 'Password'} is required`,
      });
    }
    const existUser = await UserModel.findOne({ email });
    if (!existUser) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }

    const isMatch=await bcrypt.compare(password,existUser.password);
    if(!isMatch){
      return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
    }

    return res
      .status(200)
      .json({ success: true, message: "User logged in successfully", existUser });
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
