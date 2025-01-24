import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../lib/mongodb';
import Kyc from '../../../model/Kyc';
const bcrypt = require('bcrypt')

export async function POST(request) {
    const { cardType, otherID, cardNumber, issueDate, expiryDate, email, status

    } = await request.json()
    await connectMongoDB();
    await Kyc.create({
        cardType, otherID, cardNumber, issueDate, expiryDate, email, status
    })
    return NextResponse.json({ message: "Request Created" }, { status: 201 })
}