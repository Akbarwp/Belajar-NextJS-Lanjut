import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Inno X2",
        price: 550000,
        category: "Mouse",
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/8/3837eac9-b60b-4578-8e49-99ba5f94d12b.jpg",
    },
    {
        id: 2,
        name: "Vortexseries GT-8",
        price: 850000,
        category: "Keyboard",
        image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/27/ec340a4d-147a-4d66-aba8-3bfe0424e9c4.jpg.webp?ect=4g",
    },
    {
        id: 3,
        name: "Vortexseries GT-6",
        price: 800000,
        category: "Keyboard",
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/23/1c9777bc-c507-4b67-bec8-02e20385a9e5.jpg",
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