import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true,
        select: false
    }
});

const User = mongoose.model('User', userModel);

export default User;