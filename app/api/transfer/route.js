import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../lib/mongodb';
import Transfer from '../../../model/Transfer';

const bcrypt = require('bcrypt')

export async function POST(request) {
    const { email, bankName,
        accountNumber,
        accountName,
        amount,
        transactionType,
        status,
        response,
        action

    } = await request.json()
    await connectMongoDB();
    await Transfer.create({
        email, bankName,
        accountNumber,
        accountName,
        amount,
        transactionType,
        status,
        response,
        action
    })
    return NextResponse.json({ message: "Request Created" }, { status: 201 })
}