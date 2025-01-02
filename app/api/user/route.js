import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../lib/mongodb';
import User from '../../../model/User';


export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users })
}