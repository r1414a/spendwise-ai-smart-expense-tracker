import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try{
        const con = await mongoose.connect(MONGODB_URI);
        console.log('Connected to mongoDB ', con.connection.host);
    }catch(err){
        console.log('Error while connecting to DB: ', err);
        process.exit(0);
    }
}

export {connectDB};