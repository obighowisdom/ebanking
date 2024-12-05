import { connectMongoDB } from '../../../lib/mongodb'
import User from '../../../model/User'
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt')


export async function POST(req) {
    try {
        const {
            name,
            email,
            address,
            phone,
            password,
        } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await User.create({
            name,
            email,
            address,
            phone,
            password: hashedPassword
            
            
        });
        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user" }, { status: 500 }
        );

    }
}