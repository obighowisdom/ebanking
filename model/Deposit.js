import mongoose, { Schema, models } from "mongoose";

const deposit = new Schema(
    {
        wAmount: {
            type: String,
            required: true,
        },
        method: {
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

const Deposit = models.Deposit || mongoose.model("Deposit", deposit);
export default Deposit;
