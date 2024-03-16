import Image from "next/image";
import Link from "next/link";

export default function notFound() {
    return (
        <div className="w-full h-screen bg-white text-dark-blue flex flex-col justify-center items-center">
            <Image src="/notFound.svg" width={500} height={500} alt="Not Found Image" className="mb-5" loading="eager" />
            <h1 className="text-4xl">Page Not Found</h1>
            <Link href="/" className="btn mt-5 uppercase font-bold text-blue bg-orange border-orange hover:text-orange hover:bg-blue hover:border-orange">Back to Home</Link>
        </div>
    )
};
