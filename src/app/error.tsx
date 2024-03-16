"use client"

import Image from "next/image";

export default function error() {
    return (
        <div className="w-full h-screen bg-white text-dark-blue flex flex-col justify-center items-center">
            <Image src="/error.svg" width={500} height={500} alt="Something went wrong" className="mb-5" loading="eager" />
            <h1 className="text-4xl">Something went wrong</h1>
        </div>
    )
};
