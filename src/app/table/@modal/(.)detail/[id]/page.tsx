// import Modal from "@/app/components/core/modal";
import { getDataNext } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";

//? Penggunaan Importing Client Components
const Modal = dynamic(() => import('@/app/components/core/modal'));

export default async function DetailTabel(props: any) {

    const { params } = props;
    const productsNext = await getDataNext("http://localhost:3000/api/product?id=" + params.id);

    return (
        <>
            <Modal>
                <div className="flex flex-wrap justify-center items-center gap-7">
                    <div className="card card-compact w-96 bg-blue shadow-xl">
                        <figure><Image className="w-[600px] h-[400px]" width={600} height={600} src={productsNext.data.image} alt={productsNext.data.title} /></figure>
                        <div className="card-body">
                            <h1 className="text-xl font-bold text-bone-pink hover:text-orange transition">{productsNext.data.name}</h1>
                            <p className="text-base text-bone-pink">{productsNext.data.category}</p>
                            <h2 className="text-base font-bold text-orange">{productsNext.data.price.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</h2>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
