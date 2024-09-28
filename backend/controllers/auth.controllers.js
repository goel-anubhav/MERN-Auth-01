import { User } from "../models/user.models.js"
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All Fields Are not filled correctly");
    }

    const UserAlreadyExists = await User.findOne({ email });
    if (UserAlreadyExists) {
      return res.status(400).json({ success: false, message: "User Already Exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // Fixed comma
    });

    await user.save();
    generateTokenAndSetCookie(res, user._id);

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

export const login = async (req, res) => {
  res.send("login page");
};

export const logout = async (req, res) => {
  res.send("logout page");
};
