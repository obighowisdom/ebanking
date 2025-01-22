// middleware.ts (or middleware.js)
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getUsers } from './lib/getUsers'

export async function middleware(req) {
    const data = await getUsers();

    const admin = data.map((item) => {
        return item.role
    })

    if (req.url.includes("/admin") && !admin.includes('admin')) {
        return NextResponse.redirect("https://www.nexabanking.com/auth/login");
    }
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Check if the route starts with "/user" and the user is not authenticated
    if (req.url.includes("/user") && !token) {
        // Redirect unauthenticated users to the login page
        return NextResponse.redirect("https://www.nexabanking.com/auth/login");
    }


    // Allow the request to proceed for authenticated users
    return NextResponse.next();
}

export const config = {
    matcher: ['/user/:path*', '/admin/:path*'],  // This applies the middleware to all routes under /user/*
};

