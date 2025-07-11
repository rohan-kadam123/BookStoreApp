import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"
 
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    console.log("Request Body:", req.body);

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword= await bcryptjs.hash(password,10)

    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
``
    await createdUser.save();

    res.status(201).json({ message: "User created successfully" ,
      user:{
      _id: createdUser._id,
      fullname: createdUser.fullname,
      email: createdUser.email
    }});
  } catch (error) {
    console.log("Signup Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    return res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

