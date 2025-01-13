import mongoose, { Schema, models } from "mongoose";

const transfer = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        bankName: {
            type: String,
            required: true,
        },
        accountNumber: {
            type: String,
            required: true,
        },
        accountName: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        transactionType: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

const Transfer = models.Transfer || mongoose.model("Transfer", transfer);
export default Transfer;
