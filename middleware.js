// middleware.ts (or middleware.js)
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export async function middleware(req) {
   
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Check if the route starts with "/user" and the user is not authenticated
    if (req.url.includes("/user") && !token) {
        // Redirect unauthenticated users to the login page
        return NextResponse.redirect("https://www.nexabanking.com/auth/login");
    }
    if (req.url.includes("/admin") && token?.email !== 'nexabanking@gmail.com') {
        return new NextResponse('Unauthorized', { status: 403 });
    }
    // Allow the request to proceed for authenticated users
    return NextResponse.next();

    
}

export const config = {
    matcher: ['/user/:path*', '/admin/:path*'],  // This applies the middleware to all routes under /user/*
};

