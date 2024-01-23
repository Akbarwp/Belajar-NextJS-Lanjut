'use client';

import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useRef } from "react"

export default function Modal({children}: {children: ReactNode}) {

    const overlay = useRef(null);
    const router = useRouter();

    const close: MouseEventHandler = (e) => {
        if (e.target === overlay.current) {
            router.back();
        }
    };

    return (
        <>
            <div ref={overlay} onClick={close} className="fixed left-0 right-0 top-0 bottom-0 mx-auto bg-dark-blue/60">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-bone-pink rounded-lg">
                    <h1 className="text-center mb-3 text-dark-purple text-xl font-bold">Detail Table</h1>
                    {children}
                </div>
            </div>
        </>
    )
}
