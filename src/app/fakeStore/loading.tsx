import Image from "next/image";

export default function Loading() {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <Image width={500} height={500} alt="loading picture" src="https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/8/3837eac9-b60b-4578-8e49-99ba5f94d12b.jpg" className="max-w-sm rounded-lg shadow-2xl mb-5" />
                        <h1 className="text-5xl font-bold text-bone-pink">
                            <span className="mr-5">Loading</span>
                            <span className="loading loading-spinner loading-lg text-orange"></span>
                        </h1>
                        <p className="py-6 text-bone-pink">Wait a minutes, please</p>
                    </div>
                </div>
            </div>
        </>
    )
}
