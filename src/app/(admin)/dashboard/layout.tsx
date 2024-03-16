'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layaout({ children, analytics }: { children: React.ReactNode; analytics: React.ReactNode }) {

    // Penggunaan Session pada Next-Auth
    const { data: session, status }: {data: any; status: string;} = useSession();
    const router = useRouter();

    //? Pengecekan melalui sisi client --> kurang rekomendasi, seharusnya lewat middleware
    // useEffect(() => {
    //     if (status === "unauthenticated") {
    //         router.push('/');

    //     } else {
    //         if (session !== undefined && session?.user.role !== 'admin') {
    //             router.push('/');
    //         }
    //     }

    // }, [router, status, session?.user.role, session]);

    return (
        <>
            {/* Cara penggunaan Parallel Routes */}
            <div className="p-5 w-full flex">
                <div className="w-1/2">{children}</div>
                <div className="w-1/2">{analytics}</div>
            </div>
        </>
    )
}
