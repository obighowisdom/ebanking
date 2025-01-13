import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../lib/mongodb';
import Transfer from '../../../model/Transfer';


export async function GET() {
    await connectMongoDB();
    const transfer = await Transfer.find();
    return NextResponse.json({ transfer })
}