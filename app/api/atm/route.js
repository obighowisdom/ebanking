import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../../lib/mongodb';
import Atm from '@/model/Atm';
const bcrypt = require('bcrypt')

export async function POST(request) {
    const { accountNumber, email,
        residentialAddress,
        status

    } = await request.json()
    await connectMongoDB();
    await Atm.create({
        accountNumber, email,
        residentialAddress,
        status
    })
    return NextResponse.json({ message: "Request Created" }, { status: 201 })
}