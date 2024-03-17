"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PrismaTambah() {

    const { push } = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState(0);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const submitData = { nama, deskripsi, harga };

        try {
            const res = await fetch('http://localhost:3000/api/barang', {
                headers: {
                    'content-type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(submitData),
            });
            if (res.ok) {
                setIsLoading(false);
                push("/prisma");
            } else {
                setIsLoading(false);
                if (res.status === 401) {
                    setError("Barang gagal ditambahkan");
                }
            }
        } catch (err) {
            console.log(err);
        }

        setNama("");
        setDeskripsi("");
        setHarga(0);
    };

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-start items-center p-5 mt-10">
                <h1 className="text-4xl font-bold text-bone-pink mb-5 flex items-center gap-x-3">
                    <span>Tambah Barang</span>
                    <Link href="/prisma" className="btn glass text-bone-pink">Kembali</Link>
                </h1>
                <div className="overflow-x-auto w-full">
                    {error !== '' && (
                        <div role="alert" className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-sm">{error}</span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} encType='multipart/form-data' className='w-full flex flex-col justify-center items-center'>
                        <label className="input flex items-center gap-2 bg-bone-pink text-dark-blue w-full max-w-xl">
                            <span className='font-bold'>Nama:</span>
                            <input type="text" name='nama' className="grow bg-transparent text-dark-blue" placeholder="..." value={nama} onChange={(e) => setNama(e.target.value)} required />
                        </label>
                        <label className="form-control mb-3 w-full max-w-xl">
                            <div className="label">
                                <span className="text-bone-pink font-bold">Deskripsi:</span>
                            </div>
                            <textarea name="deskripsi" rows={5} className='textarea textarea-bordered bg-bone-pink text-dark-blue' value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
                        </label>
                        <label className="input flex items-center gap-2 bg-bone-pink text-dark-blue w-full max-w-xl">
                            <span className='font-bold'>Harga:</span>
                            <input type="number" name='harga' className="grow bg-transparent text-dark-blue" placeholder="0" min={0} value={harga} onChange={(e) => setHarga(Number(e.target.value))} required />
                        </label>
                        <button disabled={isLoading} type="submit" className="btn w-full max-w-xl uppercase font-bold text-blue hover:text-white bg-green-400 border-green-400 hover:bg-green-500 hover:border-green-500 text-sm py-3 px-11 border border-solid border-transparent rounded-lg tracking-[0.5px] mt-3 cursor-pointer">
                            {!isLoading ? 'Tambah' : (
                                <span className="loading loading-spinner loading-md"></span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
