import express from 'express';
import { Register, Login } from '../controllers/AuthController.js';
import upload from '../Middlewares/Multer.js';

const AuthRoutes = express.Router();
AuthRoutes.post('/register',upload.single('profile'), Register);
AuthRoutes.post('/login', Login);

export default AuthRoutes;