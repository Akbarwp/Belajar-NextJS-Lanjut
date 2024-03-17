import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
    const res = NextResponse.next();
    return res;
}

//? Link yang bakal tidak bisa diakses
// export const config = {
//     matcher: ["/about", "/shop/:path*"],
// }

export default withAuth(mainMiddleware, [
    '/login',
    '/register',
    '/dashboard',
    '/prisma',
]);