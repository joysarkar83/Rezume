import mongoose from "mongoose";

const tokenBlacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

tokenBlacklistSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const TokenBlacklist = mongoose.model('TokenBlacklist', tokenBlacklistSchema);

export default TokenBlacklist;