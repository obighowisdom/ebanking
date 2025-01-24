import mongoose, { Schema, models } from "mongoose";

const investment = new Schema(
    {
        plan: {
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

const Investment = models.Investment || mongoose.model("Investment", investment);
export default Investment;
