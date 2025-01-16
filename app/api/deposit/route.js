import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../lib/mongodb';
import Deposit from '../../../model/Deposit';
const bcrypt = require('bcrypt')

export async function POST(request) {
    const { wAmount, method,
        email,
       

    } = await request.json()
    await connectMongoDB();
    await Deposit.create({
        wAmount, method,
        email,
    })
    return NextResponse.json({ message: "Request Created" }, { status: 201 })
}