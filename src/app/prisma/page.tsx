'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Prisma() {

    const [barang, setBarang] = useState([]);
    let i: number = 1;

    async function getData(url: string) {
        fetch("http://localhost:3000/api/barang", {
            cache: "no-store",
            method: "GET",
        })
            .then((res) => res.json())
            .then((response) => {
                setBarang(response.data);
            });
    }

    useEffect(() => {
        getData(`http://localhost:3000/api/barang`);
    }, []);

    async function handleDelete(id: number) {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Data yang telah dihapus tidak dapat dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Hapus!",
            cancelButtonText: "Batal"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/api/barang?id=${id}`, {
                    cache: "no-store",
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((response) => {
                        Swal.fire({
                            title: "Dihapus!",
                            text: response.message,
                            icon: "success"
                        });
                        getData(`http://localhost:3000/api/barang`);
                    });
            }
        });
    }

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-start items-center p-5 mt-10">
                <h1 className="text-4xl font-bold text-bone-pink mb-5 flex items-center gap-x-3">
                    <span>Tabel Barang</span>
                    <Link href="/prisma/tambah" className="btn glass text-bone-pink">Tambah</Link>
                </h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="text-orange text-xl">
                            <tr>
                                <th></th>
                                <th>Nama</th>
                                <th>Deskripsi</th>
                                <th>Harga</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-bone-pink text-lg">
                            {barang.length > 0 && barang.map((barang: any) => (
                                <tr key={barang.id} className="hover:bg-bone-pink hover:text-dark-purple transition">
                                    <td>{i++}</td>
                                    <td>{barang.nama}</td>
                                    <td>{barang.deskripsi}</td>
                                    <td>{barang.harga.toLocaleString('id-ID', { style: "currency", currency: "IDR" })}</td>
                                    <td className="flex gap-x-1">
                                        <Link href={`/prisma/${barang.id}`} className="px-1.5 py-1 text-sm bg-pink-500 text-dark-blue border border-pink-500 hover:bg-pink-400 hover:border-yellow-400 rounded-lg transition">Lihat</Link>
                                        <Link href={`/prisma/ubah/${barang.id}`} className="px-1.5 py-1 text-sm bg-yellow-500 text-dark-blue border border-yellow-500 hover:bg-yellow-400 hover:border-yellow-400 rounded-lg transition">Ubah</Link>

                                        {/* Pakai alert biasa */}
                                        {/* <button className="px-1.5 py-1 text-sm bg-red-500 text-bone-pink border border-red-500 hover:bg-red-400 hover:border-red-400 rounded-lg transition" onClick={() => { window.confirm("Apakah Anda yakin?") && handleDelete(barang.id); }}>Hapus</button> */}
                                        {/* Pakai sweetalert */}
                                        <button className="px-1.5 py-1 text-sm bg-red-500 text-bone-pink border border-red-500 hover:bg-red-400 hover:border-red-400 rounded-lg transition" onClick={() => { handleDelete(barang.id); }}>Hapus</button>
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
