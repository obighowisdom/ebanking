import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../../lib/mongodb';
import User from '../../../../model/User';

export async function GET(request, { params }) {
    const { id } = params
    const user = await User.findOne({ _id: id })
    return NextResponse.json({ user }, { status: 200 })
}