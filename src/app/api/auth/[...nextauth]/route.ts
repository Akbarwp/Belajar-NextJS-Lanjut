import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialProvider({
            type: 'credentials',
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                const user: any = {
                    id: 1,
                    username: "Ucup",
                    email: "ucup@gmail.com",
                    role: "admin",
                };
                if (email === "ucup@gmail.com" && password === "12345678") {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.providers === "credentials") {
                token.email = user.email;
                token.username = user.username;
                token.role = user.role;
            }
            return token;
        },

        async session({ session, token }: any) {
            if ("email" in token) {
                session.user.email = token.email;
            }
            if ("username" in token) {
                session.user.username = token.username;
            }
            if ("role" in token) {
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };