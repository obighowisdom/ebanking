import { connectMongoDB } from '../../../lib/mongodb'
import Client from '../../../model/Client'
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt')


export async function POST(req) {
    try {
        const {
            name,
            email,
            password,
            address,
            phone,
            accountType,
            accountNumber,
            role,
            status
        } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await Client.create({
            name,
            email,
            password: hashedPassword,
            address,
            phone,
            accountType,
            accountNumber,
            role,
            status

        });
        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user" }, { status: 500 }
        );

    }
}