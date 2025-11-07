import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, "Date on which you bought something can't be empty!."]
    },
    amount: {
        type: Number,
        required: [true, "Amount at which you bought something can't be negative!"],
        min: [0, "amount can't be negative"]

    },
    category: {
        type: String,
         required: [true, "expense should have a category!."],
    },
    description_original:{
        type: String,
        required: [true, "The thing you bought can't be empty!."]
    },
    description_processed: { type: String },  
})

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;