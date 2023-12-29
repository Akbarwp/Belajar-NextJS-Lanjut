import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
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
