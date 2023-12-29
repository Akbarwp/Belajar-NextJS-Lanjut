import Link from "next/link";

// Cara penggunaan Dynamic Routing --> mengakses parameter pada URL, multiple parameter, optional parameter
type ShopProps = { params: { slug: string[] } };

export default function Shop(props: ShopProps) {
    const { params } = props;
    return (
        <>
            <main className="flex h-screen items-center justify-center hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        {params.slug ? (
                            <>
                                <h1 className="text-5xl font-bold text-bone-pink">Detail Shop Page: <span className="text-orange">{`${params.slug[0]} ${params.slug[1]}`}</span></h1>
                                <p className="py-6 text-bone-pink">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam soluta at quasi aliquid explicabo natus excepturi atque sit quidem.</p>
                                <Link href="/shop" className="btn btn-primary">Kembali</Link>
                            </>
                        ) : (
                            <>
                                <h1 className="text-5xl font-bold text-bone-pink">Shop Page</h1>
                                <p className="py-6 text-bone-pink">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}
