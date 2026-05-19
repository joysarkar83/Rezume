import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import { loginController, registerController, logoutController, getMeController } from "../controllers/auth.controllers.js";
const authRouter = Router();

// /api/auth/register
authRouter.post('/register', registerController);

// /api/auth/login
authRouter.post('/login', loginController);

// /api/auth/logout
authRouter.get('/logout', logoutController);

// /api/auth/get-me
authRouter.get('/get-me', verifyToken, getMeController);

export default authRouter;