import Head from "next/head";

export default function Analytics() {
    return (
        <>
            <Head>
                <title>Analytics</title>
            </Head>
            <main className="flex h-screen items-center justify-center hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-bone-pink">Analytics</h1>
                        <p className="py-6 text-bone-pink">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus saepe tempore nulla harum ex. Consequatur?</p>
                        <button className="btn btn-primary">Start Analytics</button>
                    </div>
                </div>
            </main>
        </>
    )
}
