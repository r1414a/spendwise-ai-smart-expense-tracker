import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {connectDB} from "./db/connectDB.js";
import expenseRoutes from "./routes/expenses.route.js";
import cors from 'cors';

connectDB();
const app = express();


app.use(express.json());
app.use(express.urlencoded());
const PORT = 8000;

app.use(cors({
    origin: process.env.CLIENT_DEV,
    methods: ["GET","POST","DELETE"],
}))


app.use("/api/expense", expenseRoutes);

app.get("/",(req,res) => {
    res.send("server running.");
})


app.listen(PORT, (req,res) => {
    console.log(`server started listening on PORT: ${PORT}`);
    
})