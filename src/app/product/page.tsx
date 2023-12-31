"use client";

import Link from "next/link";
import { useState } from "react";

export default function Product() {

    // revalidate --> On-Demand revalidation
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const revalidate = async () => {
        const res = await fetch(`http://localhost:3000/api/revalidate?tag=products&secret=12345678`, {
            method: "POST",
        });

        setTimeout(() => {
            setIsLoading(true);
        }, 1000);

        if (!res.ok) {
            setMessage("Revalidate Failed!");

        } else {
            const status = await res.json();
            if (status.revalidate) {
                setMessage("Revalidate Success!");
            }
        }
        setIsLoading(false);
    }

    return (
        <>
            <main className="flex h-screen items-center justify-center hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-bone-pink">Product Page</h1>
                        <p className="py-6 text-bone-pink">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam soluta at quasi aliquid explicabo natus excepturi atque sit quidem.</p>
                        <div className="flex justify-center gap-x-3">
                            <Link href="/product/Guitar" className="btn btn-primary">Guitar</Link>
                            <Link href="/product/Bass" className="btn btn-primary">Bass</Link>
                            <Link href="/product/Piano" className="btn btn-primary">Piano</Link>
                        </div>
                        <button className="mt-3 px-3 py-2 bg-blue text-bone-pink border border-blue hover:bg-dark-blue hover:border-bone-pink rounded-lg transition" onClick={() => revalidate()}>
                            {
                                !isLoading && message === "" ? "Revalidate Fake Store" : isLoading ? message : <span className="loading loading-spinner loading-md text-bone-pink"></span>
                            }
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}
