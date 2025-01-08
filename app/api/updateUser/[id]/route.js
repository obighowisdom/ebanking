import { connectMongoDB } from '../../../../lib/mongodb';
import User from '../../../../model/User';

import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    const { id } = params
    const { status: status,
        accountNumber: accountNumber,
        role: role,
        accountType: accountType,
        loan: loan,
        totalAmount: totalAmount,
        uncleared: uncleared } = await request.json()
    await connectMongoDB()
    await User.findByIdAndUpdate(id, { status, accountNumber, role, accountType, loan, totalAmount, uncleared })
    return NextResponse.json({ message: "User Details Updated" }, { status: 200 })
}