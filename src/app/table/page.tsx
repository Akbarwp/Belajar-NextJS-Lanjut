import { getDataNext } from "@/services/products";
import Link from "next/link";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Table() {
    const productsNext = await getDataNext("http://localhost:3000/api/product");
    let i: number = 1;

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-start items-center p-5 mt-10">
                <h1 className="text-4xl font-bold text-bone-pink">Table</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="text-orange text-xl">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-bone-pink text-lg">
                            {productsNext.data.length > 0 && productsNext.data.map((product: any) => (
                                <tr key={product.id} className="hover:bg-bone-pink hover:text-dark-purple transition">
                                    <td>{i++}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</td>
                                    <td className="flex gap-x-1">
                                        <Link href={`/table/detail/${product.id}`} className="px-1.5 py-1 text-sm bg-blue text-bone-pink border border-blue hover:bg-dark-blue hover:border-bone-pink rounded-lg transition">Modal</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
