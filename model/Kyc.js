import mongoose, { Schema, models } from "mongoose";

const kyc = new Schema(
    {
        cardType: {
            type: String,
            required: true,
        },
        otherID: {
            type: String,
            
        },
        cardNumber: {
            type: String,
            required: true,
        },
        issueDate: {
            type: String,
            required: true,
        },
        expiryDate: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: 'pending'
        },
       
    },
    { timestamps: true }
);

const Kyc = models.Kyc || mongoose.model("Kyc", kyc);
export default Kyc;
