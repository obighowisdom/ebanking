import mongoose, { Schema, models } from "mongoose";

const signUpSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        accountType: {
            type: String,
            required: true,
        },
        accountNumber: {
            type: String,
            required: true,
        },
        role: {
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

const Client = models.Client || mongoose.model("Client", signUpSchema);
export default Client;
