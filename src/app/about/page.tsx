import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Halaman About',
}

export default function About() {
    return (
        <>
            <main className="flex h-screen items-center justify-center hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-bone-pink">About Page</h1>
                        <p className="py-6 text-bone-pink">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </main>
        </>
    )
}
