import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
app.use(cookieParser());
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Mongodb is connected');
})
.catch((err) => {
    console.log(err);
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
app.use(cors({
    origin:"http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json())
app.use('/backend/user', userRoutes);
app.use('/backend/auth', authRoutes);
app.use('/backend/post', postRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});