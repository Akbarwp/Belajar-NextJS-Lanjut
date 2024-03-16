import type {Metadata} from "next";

//? Penggunaan SEO & Metadata
export const openGraphImage = { images: ['/photoProfile.jpg'] }
export const metadata: Metadata = {
    title: "Home",
    description: "Belajar NextJS App Router",
    authors: [{name: 'Akbar W.P.', url: 'http://localhost:3000'}],
    // icons: {
    //     icon: '/photoProfile.jpg',
    // },
    openGraph: {
        title: "Home",
        siteName: "Home",
        description: "Belajar NextJS App Router",
        url: "http://localhost:3000",
        ...openGraphImage,
        type: "website",
    }
}

export default function Home() {
    return (
        <>
            <main className="flex h-screen items-center justify-center hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-bone-pink">Homepage</h1>
                        <p className="py-6 text-bone-pink">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, magnam!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </main>
        </>
    )
}
