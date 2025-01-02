import { NextResponse } from 'next/server'
import User from '../../../../model/User'
import { connectMongoDB } from '../../../../lib/mongodb';
const bcrypt = require('bcrypt')



export async function POST(request: Request) {
    const {
        name,
        email,
        password,
        dob,
        country,
        state,
        city,
        zipcode,
        landmark,
        address,
        phone,
        accountType,
        accountNumber,
        profileImage,
        role,
        status,
        totalAmount,
        loan,
        uncleared,

    } = await request.json();

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if (!isValidEmail(email)) {
        return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    // if (password.length < 6) {
    //     return NextResponse.json({ message: "Password must be at least 6 character long" }, { status: 400 });
    // }

    try {
        await connectMongoDB();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exist" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            dob,
            country,
            state,
            city,
            zipcode,
            landmark,
            address,
            phone,
            accountType,
            accountNumber,
            profileImage,
            role,
            status,
            totalAmount,
            loan,
            uncleared,

        });
        await newUser.save();
        return NextResponse.json({ message: "User created" }, { status: 201 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}