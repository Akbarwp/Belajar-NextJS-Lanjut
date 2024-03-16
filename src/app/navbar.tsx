"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {

    // Cara penggunaan Hook bila berada URL tertentu
    const pathname = usePathname();

    // Cara penggunaan Hook untuk menuju URL tertentu
    const router = useRouter();

    const { data: session, status }: { data: any, status: string; } = useSession();

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
                            <li className={`${pathname === "/about" ? "text-purple" : "text-blue"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/about">About</Link></li>
                            <li>
                                <Link href="/shop" className="text-blue hover:bg-white/60 hover:rounded-lg hover:transition">Shop</Link>
                                <ul className="p-2">
                                    <li className={`${pathname === "/product" ? "text-purple" : "text-orange"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/shop/Guitar">Guitar</Link></li>
                                    <li className={`${pathname === "/product" ? "text-purple" : "text-orange"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/shop/Guitar/Bass">Bass</Link></li>
                                </ul>
                            </li>
                            <li className={`${pathname === "/product" ? "text-purple" : "text-blue"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/product">Product</Link></li>
                            <li className={`${pathname === "/fakeStore" ? "text-purple" : "text-blue"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/fakeStore">Fake Store</Link></li>
                            <li className={`${pathname === "/dashboard" ? "text-purple" : "text-blue"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/dashboard">Dashboard</Link></li>
                            <li className={`${pathname === "/table" ? "text-purple" : "text-blue"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/table">Table</Link></li>
                        </ul>
                    </div>

                    <Link href="/" className="btn btn-ghost text-xl text-bone-pink">Home</Link>
                </div>

                {/* Website */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className={`${pathname === "/about" ? "text-orange" : "text-bone-pink"}`}><Link href="/about">About</Link></li>
                        <li>
                            <div className="dropdown dropdown-bottom dropdown-hover">
                                <div tabIndex={0} role="button" className={`${pathname === "/shop" ? "text-orange" : "text-bone-pink"}`}><Link href="/shop">Shop</Link></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-bone-pink rounded-box w-52">
                                    <li className={`${pathname === "/shop/Guitar" ? "text-orange" : "text-blue"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/shop/Guitar">Guitar</Link></li>
                                    <li className={`${pathname === "/shop/Guitar/Bass" ? "text-orange" : "text-blue"} hover:bg-white/60 hover:rounded-lg hover:transition`}><Link href="/shop/Guitar/Bass">Bass</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${pathname === "/product" ? "text-orange" : "text-bone-pink"}`}><Link href="/product">Product</Link></li>
                        <li className={`${pathname === "/fakeStore" ? "text-orange" : "text-bone-pink"}`}><Link href="/fakeStore">Fake Store</Link></li>
                        <li className={`${pathname === "/dashboard" ? "text-orange" : "text-bone-pink"}`}><Link href="/dashboard">Dashboard</Link></li>
                        <li className={`${pathname === "/table" ? "text-orange" : "text-bone-pink"}`}><Link href="/table">Table</Link></li>
                    </ul>
                </div>

                <div className="navbar-end gap-x-2">
                    {/* Login biasa */}
                    {/* <Link href="/login" className="btn uppercase font-bold text-blue bg-orange border-orange hover:text-orange hover:bg-blue hover:border-orange">
                        Login
                    </Link> */}

                    {/* Login hook */}
                    {/* <button onClick={() => router.push("/login")} className="btn uppercase font-bold text-blue bg-orange border-orange hover:text-orange hover:bg-blue hover:border-orange">
                        Login H
                    </button> */}

                    {/* Login Next-Auth */}
                    {status === "authenticated" ? (
                        <div className="dropdown dropdown-end">
                            <div className="flex items-center mr-3">
                                <span className="text-white font-semibold mr-1">{session?.user?.username}</span>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-9 rounded-full">
                                        <Image width={100} height={100} alt="Photo Profile" src="/photoProfile.jpg" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-fun-green">
                                {session?.user?.role === "admin" ?
                                    <li><Link href="/admin">Admin</Link></li>
                                    : ""}
                                <li>
                                    <Link href="/profile" className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li>
                                    <a onClick={() => signOut()} className="text-blue bg-orange border-orange hover:text-orange hover:bg-blue hover:border-orange">Logout</a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            {/* Sign Up biasa */}
                            <Link href="/register" className="btn uppercase font-bold text-blue bg-bone-pink border-bone-pink hover:text-bone-pink hover:bg-blue hover:border-bone-pink">
                                Register
                            </Link>
                            <button className="btn uppercase font-bold text-blue bg-orange border-orange hover:text-orange hover:bg-blue hover:border-orange" onClick={() => signIn()}>
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div >
        </>
    )
}
