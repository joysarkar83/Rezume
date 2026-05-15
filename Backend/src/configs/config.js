import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
if(!process.env.PORT) {
    console.warn('PORT is not defined in .env file. Using default port 3000.');
}

const MONGO_URI = process.env.MONGO_URI;
if(!MONGO_URI) {
    console.warn('MONGO_URI is not defined in .env file.');
}

const JWT_SECRET = process.env.JWT_SECRET;
if(!JWT_SECRET) {
    console.warn('JWT_SECRET is not defined in .env file.');
}

export default {
    PORT,
    MONGO_URI,
    JWT_SECRET
};