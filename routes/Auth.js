import express from 'express';
import { Register, Login, GetUser } from '../controllers/AuthController.js';
import upload from '../Middlewares/Multer.js';

const AuthRoutes = express.Router();
AuthRoutes.post('/register',upload.single('profile'), Register);
AuthRoutes.post('/login', Login);
AuthRoutes.get('/getUser', GetUser);

export default AuthRoutes;