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

    } = await request.json()
    await connectMongoDB();
    await Transfer.create({
        email, bankName,
        accountNumber,
        accountName,
        amount,
        transactionType,
        status,
    })
    return NextResponse.json({ message: "Request Created" }, { status: 201 })
}