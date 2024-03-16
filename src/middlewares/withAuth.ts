import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const onlyAdmin = ['/dashboard'];
const auth = ['/login', '/register'];

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname;

        if (requireAuth.includes(pathname)) {
            const token = await getToken({
                req,
                secret: process.env.NEXTAUTH_SECRET,
            });

            //? Middleware kalau belum login
            if (!token && auth.includes(pathname)) {
                const url = new URL('/login', req.url);
                url.searchParams.set('callbackurl', encodeURI(req.url));
                return NextResponse.redirect(url);
            }

            if (token) {
                //? Middleware kalau sudah login tapi masuk ke halaman Login
                if (auth.includes(pathname)) {
                    return NextResponse.redirect(new URL('/', req.url));
                }

                //? Middleware kalau sudah login tapi masuk ke halaman khusus admin
                if (token.role !== 'admin' && onlyAdmin.includes(pathname)) {
                    return NextResponse.redirect(new URL('/', req.url));
                }
            }

        }
        return middleware(req, next);
    }
};
