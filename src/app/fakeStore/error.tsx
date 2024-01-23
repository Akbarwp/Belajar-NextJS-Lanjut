"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Error({error, reset}: {error: Error; reset: () => void;}) {

    useEffect(() => {
        console.log('error');

    }, [error]);

    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <Image width={500} height={500} alt="loading picture" src="https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/8/3837eac9-b60b-4578-8e49-99ba5f94d12b.jpg" className="max-w-sm rounded-lg shadow-2xl mb-5" />
                        <h1 className="text-5xl font-bold text-error">Error</h1>
                        <p className="py-6 text-bone-pink">{error.message}</p>
                        <button className="px-3 py-2 bg-blue text-bone-pink border border-blue hover:bg-dark-blue hover:border-bone-pink rounded-lg transition" onClick={() => reset()}>Try again</button>
                    </div>
                </div>
            </div>
        </>
    )
}
