import express from 'express';
import dotenv from 'dotenv';
import AuthRoutes from './routes/Auth.js';
import dbConnect from './utils/db.js';
import MessageRoutes from './routes/Message.js';

dotenv.config();

const PORT =process.env.PORT || 5000;

//DB_Connection
dbConnect();

const app = express();

//Middlewares   
app.use(express.json());
app.use(express.static('public'));

//Routes
app.use("/api/auth",AuthRoutes);
app.use("/api/messages",MessageRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});