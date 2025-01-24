import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../lib/mongodb';
import Investment from '../../../model/Investment';
const bcrypt = require('bcrypt')

export async function POST(request) {
    const { plan, email,

    } = await request.json()
    await connectMongoDB();
    await Investment.create({
        plan, email
    })
    return NextResponse.json({ message: "Request Created" }, { status: 201 })
}