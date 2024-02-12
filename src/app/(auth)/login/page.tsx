"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Contoh penggunaan Group Routing membuat route Login tanpa harus ada URL '/auth'
export default function Login() {

    const { push } = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: e.target.email.value,
                password: e.target.password.value,
                callbackUrl: "/dashboard",
            });

            if (!res?.error) {
                push("/product");
                setIsLoading(false);
            } else {
                console.log(res.error);
                setError(res.error);
                setIsLoading(false);
            }

        } catch (err) {
            console.log(err);
            setError("Error");
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="m-0 p-0 box-border flex items-center justify-center flex-col h-screen">
                <div className="bg-white rounded-[30px] shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px]">
                    <div className="absolute top-0 h-full transition-all ease-in-out left-0 w-1/2 z-20">
                        <form onSubmit={(e) => handleLogin(e)} encType="multipart/form-data" className="bg-white flex items-center justify-center flex-col py-0 px-10 h-full">
                            <h1 className="text-3xl text-orange font-bold">Sign In</h1>
                            <div className="my-5 mx-0">
                                <button className="text-dark-blue hover:text-white text-sm border border-solid border-[#ccc] hover:border-bone-pink rounded-[20%] flex justify-center items-center my-0 mx-1 w-[40px] h-[40px] hover:bg-bone-pink transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path></svg>
                                </button>
                            </div>
                            <span className="text-sm text-dark-blue mb-2">or use your email password</span>
                            <input name="email" type="email" placeholder="Email" className="bg-[#eee] border-none my-2 mx-0 py-3 px-4 text-sm rounded-lg w-full outline-none text-orange" required />
                            <input name="password" type="password" placeholder="Password" className="bg-[#eee] border-none my-2 mx-0 py-3 px-4 text-sm rounded-lg w-full outline-none text-orange" required />
                            <button type="submit" className="btn w-full uppercase font-bold text-blue hover:text-white bg-bone-pink border-bone-pink hover:bg-orange hover:border-bone-pink text-sm py-3 px-11 border border-solid border-transparent rounded-lg tracking-[0.5px] mt-3 cursor-pointer">
                                {!isLoading ? 'Login' : (
                                    <span className="loading loading-spinner loading-md"></span>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all ease-in-out rounded-l-[20%] z-[1000]">
                        <div className="bg-primary h-full w-[200%] bg-gradient-to-r from-bone-pink to-orange text-white relative -left-full translate-x-0 transition-all ease-in-out">
                            <div className="absolute w-1/2 h-full flex items-center justify-center flex-col py-0 px-8 text-center top-0 translate-x-0 transition-all ease-in-out right-0">
                                <h1 className="text-3xl font-bold">Hello, Friend!</h1>
                                <p className="text-base leading-5 tracking-[0.3px] my-5 mx-0">Register with your personal details to use all of site features</p>
                                <Link href="/register" className="bg-primary hover:bg-white text-white hover:text-orange text-sm py-3 px-11 border-solid border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-3 cursor-pointer bg-transparent border border-white transition" id="register">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
