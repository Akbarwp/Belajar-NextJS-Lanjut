import Link from "next/link";

export default function Product() {
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
                    </div>
                </div>
            </main>
        </>
    )
}
