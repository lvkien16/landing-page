import Auth from "../models/auth.model.js";
import bcryptjs from "bcryptjs";

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Auth.findOne({ username });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
      return;
    }
    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatch) {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
