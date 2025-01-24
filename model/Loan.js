import mongoose, { Schema, models } from "mongoose";

const loan = new Schema(
    {
        plan: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        accountNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
       
    },
    { timestamps: true }
);

const Loan = models.Loan || mongoose.model("Loan", loan);
export default Loan;
