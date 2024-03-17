import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        const idBarang = Number(id);
        const barang = await prisma.barang.findUnique({
            where: { id: idBarang },
        });
        if (barang) {
            return NextResponse.json(
                {
                    success: true,
                    message: "Data Detail Barang",
                    data: barang,
                },
                {
                    status: 200,
                }
            );
        }
        return NextResponse.json(
            {
                success: true,
                message: "Data Barang tidak ditemukan",
                data: null,
            },
            {
                status: 404,
            }
        );
    }

    const data = await prisma.barang.findMany({ orderBy: { id: 'asc' } });

    return NextResponse.json(
        {
            success: true,
            message: "List data Barang",
            data: data,
        },
        {
            status: 200,
        }
    );
}

export async function POST(request: NextRequest) {
    const { nama, deskripsi, harga }: any = await request.json();

    const barang = await prisma.barang.create({
        data: {
            nama: nama,
            deskripsi: deskripsi,
            harga: harga,
        }
    });

    return NextResponse.json(
        {
            success: true,
            message: "Barang berhasil ditambahkan",
            data: barang,
        },
        {
            status: 201,
        }
    );
}

export async function PUT(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const idBarang = Number(id);

    const { nama, deskripsi, harga }: any = await request.json();
    const barang = await prisma.barang.update({
        where: { id: idBarang },
        data: {
            nama: nama,
            deskripsi: deskripsi,
            harga: harga,
            updated_at: new Date(),
        }
    });

    return NextResponse.json(
        {
            success: true,
            message: "Barang berhasil diperbarui",
            data: barang,
        },
        {
            status: 200,
        }
    );
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const idBarang = Number(id);

    // const id = parseInt(params.id);
    const barang = await prisma.barang.delete({
        where: { id: idBarang },
    });

    return NextResponse.json(
        {
            success: true,
            message: "Barang berhasil dihapus",
            data: barang,
        },
        {
            status: 200,
        }
    );
}