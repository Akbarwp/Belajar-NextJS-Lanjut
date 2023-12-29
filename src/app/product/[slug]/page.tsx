import Link from "next/link";

// Cara penggunaan Dynamic Routing --> mengakses parameter pada URL
type DetailProductProps = { params: { slug: string } };

export default function DetailProduct(props: DetailProductProps) {
    const { params } = props;
    return (
        <>
            <main className="flex h-screen items-center justify-center hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-bone-pink">Detail Product Page: <span className="text-orange">{params.slug}</span></h1>
                        <p className="py-6 text-bone-pink">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam soluta at quasi aliquid explicabo natus excepturi atque sit quidem.</p>
                        <Link href="/product" className="btn btn-primary">Kembali</Link>
                    </div>
                </div>
            </main>
        </>
    )
}
