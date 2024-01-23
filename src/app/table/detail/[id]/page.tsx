import { getDataNext } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

export default async function DetailTabel(props: any) {

    const { params } = props;
    const productsNext = await getDataNext("http://localhost:3000/api/product?id=" + params.id);

    return (
        <>
            <main className="w-full h-full px-7 py-3">
                <h1 className="text-5xl font-bold text-bone-pink my-10 flex justify-center items-center gap-x-3">
                    {productsNext.data.name}
                    <Link href="/table" className="px-1.5 py-1 text-sm bg-blue text-bone-pink border border-blue hover:bg-dark-blue hover:border-bone-pink rounded-lg transition">Kembali</Link>
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-7 mb-10">
                    <div className="card card-compact w-96 bg-blue shadow-xl">
                        <figure><Image className="w-[600px] h-[400px]" width={600} height={600} src={productsNext.data.image} alt={productsNext.data.title} /></figure>
                        <div className="card-body">
                            <h1 className="text-xl font-bold text-bone-pink hover:text-orange transition">{productsNext.data.name}</h1>
                            <p className="text-base text-bone-pink">{productsNext.data.category}</p>
                            <h2 className="text-base font-bold text-orange">{productsNext.data.price.toLocaleString('en-US', { style: "currency", currency: "USD" })}</h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
