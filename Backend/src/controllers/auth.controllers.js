import User from "../models/users.model.js";
import TokenBlacklist from "../models/tokenBlacklist.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../configs/config.js";

// api/auth/register
export const registerController = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
    if (user) {
        return res.status(400).json({ message: "Username or email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, passwordHash });
    const token = await jwt.sign({ id: newUser._id }, config.JWT_SECRET, { expiresIn: '1d' });
    await newUser.save();
    res.cookie('token', token);

    return res.status(201).json({
        message: "User registered successfully",
        user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email
        }
    });
}

// api/auth/login
export const loginController = async (req, res) => {
    const { info, password } = req.body;
    if (!info || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ $or: [{ username: info }, { email: info }] }).select("+passwordHash");
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('token', token);

    return res.status(200).json({
        message: "Login successful",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
}

// api/auth/logout
export const logoutController = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({ message: "No token provided" });
    }

    await TokenBlacklist.create({ token });
    
    res.clearCookie('token');
    return res.status(200).json({ message: "Logout successful" });
}

// api/auth/get-me
export const getMeController = (req, res) => {
    const user = req.user;
    return res.status(200).json({
        message: "User retrieved successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
};