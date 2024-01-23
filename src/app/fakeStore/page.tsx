"use client";

import Image from "next/image";
import Link from "next/link";

// Cara melakukan Data Fetching ==> fake store
async function getData() {
    const res = await fetch('https://fakestoreapi.com/products', {
        // Cara penggunaan loading page
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed fetch data!");
    }
    return res.json();
}

// Cara melakukan Data Fetching ==> api route
async function getDataNext() {
    const res = await fetch("http://localhost:3000/api/producta", {
        // Cara penggunaan Cache untuk load data tanpa perlu fetch lagi
        cache: "force-cache",

        // Cara penggunaan Revalidating untuk updating cache
        next: {
            // revalidate --> Timebased revalidation
            // revalidate: 5, // second

            // revalidate --> On-Demand revalidation
            tags: ['products']
        },
    });

    if (!res.ok) {
        throw new Error("Failed fetch data!");
    }
    return res.json();
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function FakeStore() {

    // const products = await getData();
    const productsNext = await getDataNext();

    return (
        <>
            {/* <main className="w-full h-full px-7 py-3">
                <h1 className="text-5xl font-bold text-bone-pink text-center my-10">Fake Store Page --> <span className="text-orange">Fake Store API</span></h1>
                <div className="flex flex-wrap justify-center items-center gap-7 mb-10">
                    {products.length > 0 && products.map((product: any) => (
                        <>
                            <div key={product.id} className="card card-compact w-96 bg-blue shadow-xl">
                                <figure><Image className="w-[600px] h-[400px]" width={600} height={600} src={product.image} alt={product.title} /></figure>
                                <div className="card-body">
                                    <Link href={`/fakeStore/${product.id}`} className="text-xl font-bold text-bone-pink hover:text-orange transition">{product.title}</Link>
                                    <p className="text-base text-bone-pink">{product.category}</p>
                                    <h2 className="text-base font-bold text-orange">{product.price.toLocaleString('en-US', { style: "currency", currency: "USD" })}</h2>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </main> */}

            <main className="w-full h-full px-7 py-3">
                <h1 className="text-5xl font-bold text-bone-pink text-center my-10">Fake Store Page {'-->'} <span className="text-orange">API Route</span></h1>
                <div className="flex flex-wrap justify-center items-center gap-7 mb-10">
                    {productsNext.data.length > 0 && productsNext.data.map((product: any) => (
                        <div key={product.id} className="card card-compact w-96 bg-blue shadow-xl">
                            <figure><Image className="w-[600px] h-[400px]" width={600} height={600} src={product.image} alt={product.name} /></figure>
                            <div className="card-body">
                                <Link href={`/fakeStore/${product.id}`} className="text-xl font-bold text-bone-pink hover:text-orange transition">{product.name}</Link>
                                <p className="text-base text-bone-pink">{product.category}</p>
                                <h2 className="text-base font-bold text-orange">{product.price.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}
