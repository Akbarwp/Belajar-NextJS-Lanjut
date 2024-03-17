import Link from 'next/link';

async function getData(url: string) {
    const res = await fetch(url, {
        cache: "no-store",
    });
    console.log(res);
    if (!res.ok) {
        throw new Error("Failed fetch data!");
    }
    return res.json();
}

export default async function PrismaDetail(props: any) {

    const { params } = props;
    const barang = await getData(`http://localhost:3000/api/barang?id=${params.id}`);

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-start items-center p-5 mt-10">
                <h1 className="text-4xl font-bold text-bone-pink mb-5 flex items-center gap-x-3">
                    <span>Detail Barang</span>
                    <Link href="/prisma" className="btn glass text-bone-pink">Kembali</Link>
                </h1>
                <div className="overflow-x-auto">
                    <div className="card card-compact w-96 bg-blue shadow-xl">
                        <div className="card-body">
                            <h1 className="text-xl font-bold text-bone-pink hover:text-orange transition">{barang.data.nama}</h1>
                            <p className="text-base text-bone-pink">{barang.data.deskripsi}</p>
                            <h2 className="text-base font-bold text-orange">{barang.data.harga.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
