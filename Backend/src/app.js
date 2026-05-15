import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

import authRouter from "./routes/auth.routes.js";

// Auth Routes
app.use('/api/auth', authRouter);

export default app;