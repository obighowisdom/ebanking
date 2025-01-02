// auth-config.ts
import { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import bcrypt from "bcrypt";
import User from "../../../model/User";
import { connectMongoDB } from "../../../lib/mongodb";

// Extend the built-in session types
interface ExtendedSession {
    user: {
        email: string | null;
        name: string | null;
        image: string | null;
        
    };
}

// Extend the built-in JWT types
interface ExtendedJWT extends JWT {
    id?: string;
    email?: string;
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },
            async authorize(
                credentials: Record<"email" | "password", string> | undefined
            ): Promise<NextAuthUser | null> {
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email: credentials?.email });

                    if (!user) {
                        throw new Error("User not found");
                    }

                    if (!credentials?.password) {
                        throw new Error("Password not provided");
                    }

                    const isValidPassword = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!isValidPassword) {
                        throw new Error("Invalid password");
                    }

                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name,
                    };
                   
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === "github") {
                try {
                    await connectMongoDB();
                    const existingUser = await User.findOne({ email: profile?.email });

                    if (!existingUser && profile?.email) {
                        await User.create({
                            name: profile?.name,
                            email: profile.email,
                        });
                    }
                    return true;
                } catch (error) {
                    console.error("Sign in error:", error);
                    return false;
                }
            }
            return true;
        },

        async jwt({ token, user }): Promise<ExtendedJWT> {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user = {
                    email: token.email,
                    name: token.name,
                    image: token.picture,
                    
                };
            };
            return session;
        }
    },
    pages: {
        signIn: "/auth/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};