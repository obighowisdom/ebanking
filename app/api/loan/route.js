import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../lib/mongodb';
import Loan from '../../../model/Loan';
const bcrypt = require('bcrypt')

export async function POST(request) {
    const { plan,amount, accountNumber, email

    } = await request.json()
    await connectMongoDB();
    await Loan.create({
        plan, amount, accountNumber, email
    })
    return NextResponse.json({ message: "Request Created" }, { status: 201 })
}