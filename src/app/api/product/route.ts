import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Rexus Daxa Air 4",
        price: 749000,
        category: "Mouse",
    },
    {
        id: 2,
        name: "Vortexseries GT-8",
        price: 850000,
        category: "Keyboard",
    },
    {
        id: 3,
        name: "Dolphin Sound DS-Orca",
        price: 550000,
        category: "Audio Interface",
    },
];

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
        }
        return NextResponse.json({ status: 404, message: "Not Found" });
    }

    return NextResponse.json({ status: 200, message: "Success", data: data });
}