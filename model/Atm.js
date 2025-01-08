import mongoose, { Schema, models } from "mongoose";

const atm = new Schema(
    {
        accountNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        residentialAddress: {
            type: String,
            required: true,
        },
        cardType: {
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

const Atm = models.Atm || mongoose.model("Atm", atm);
export default Atm;
