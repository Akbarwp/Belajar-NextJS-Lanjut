import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

    return (
        <>
            <div className="navbar bg-blue">
                {/* Mobile */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-bone-pink rounded-box w-52">
                            <li className="text-blue hover:bg-white/60 hover:rounded-lg hover:transition"><Link href="/about">About</Link></li>
                            <li>
                                <Link href="/shop" className="text-blue hover:bg-white/60 hover:rounded-lg hover:transition">Shop</Link>
                                <ul className="p-2">
                                    <li className="text-orange hover:bg-white/60 hover:rounded-lg hover:transition"><Link href="/shop/guitar">Guitar</Link></li>
                                    <li className="text-orange hover:bg-white/60 hover:rounded-lg hover:transition"><Link href="/shop/guitar/bass">Bass</Link></li>
                                </ul>
                            </li>
                            <li className="text-blue hover:bg-white/60 hover:rounded-lg hover:transition"><Link href="/product">Product</Link></li>
                        </ul>
                    </div>

                    <Link href="/" className="btn btn-ghost text-xl text-bone-pink">Home</Link>
                </div>

                {/* Website */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-bone-pink"><Link href="/about">About</Link></li>
                        <li>
                            <div className="dropdown dropdown-bottom dropdown-hover">
                                <div tabIndex={0} role="button" className="text-bone-pink"><Link href="/shop">Shop</Link></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-bone-pink rounded-box w-52">
                                    <li className="text-blue hover:bg-white/60 hover:rounded-lg transition"><Link href="/shop/guitar">Guitar</Link></li>
                                    <li className="text-blue hover:bg-white/60 hover:rounded-lg transition"><Link href="/shop/guitar/bass">Bass</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-bone-pink"><Link href="/product">Product</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-x-2">
                    {/* Sign Up biasa */}
                    <Link href="/auth/register" className="btn uppercase font-bold text-blue bg-bone-pink border-bone-pink hover:text-bone-pink hover:bg-blue hover:border-bone-pink">
                        Register
                    </Link>

                    {/* Login biasa */}
                    <Link href="/auth/login" className="btn uppercase font-bold text-blue bg-orange border-orange hover:text-orange hover:bg-blue hover:border-orange">
                        Login
                    </Link>
                </div>
            </div >
        </>
    )
}
