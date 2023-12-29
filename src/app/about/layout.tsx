import Link from "next/link";

// Penggunaan Layout terpisah (about/layout.tsx) dari Layout Utama (app/layout.tsx)
export default function AboutLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <nav className="fixed left-0 top-15 z-10 h-screen w-60 bg-blue">
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 ml-3 z-[1] px-2 py-5 shadow shadow-dark-blue rounded-box w-52">
                    <li className="text-bone-pink hover:bg-bone-pink/20 hover:rounded-lg hover:transition"><Link href="/about">About</Link></li>
                    <li>
                        <Link href="/shop" className="text-bone-pink hover:bg-bone-pink/20 hover:rounded-lg hover:transition">Shop</Link>
                        <ul className="p-2">
                            <li className="text-orange hover:bg-bone-pink/20 hover:rounded-lg hover:transition"><Link href="/shop/guitar">Guitar</Link></li>
                            <li className="text-orange hover:bg-bone-pink/20 hover:rounded-lg hover:transition"><Link href="/shop/guitar/bass">Bass</Link></li>
                        </ul>
                    </li>
                    <li className="text-bone-pink hover:bg-bone-pink/20 hover:rounded-lg hover:transition"><Link href="/product">Product</Link></li>
                </ul>
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}