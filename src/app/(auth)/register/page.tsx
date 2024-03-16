"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {

    const { push } = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: any) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        if (e.target.password.value !== e.target.repeat_password.value) {
            setIsLoading(false);
            setError("Passwords do not match!");

        } else {
            const res = await fetch('api/auth/register', {
                method: "POST",
                body: JSON.stringify({
                    username: e.target.username.value,
                    email: e.target.email.value,
                    password: e.target.password.value,
                }),
            });
    
            if (res.status === 200) {
                e.target.reset();
                push('/login');
    
            } else {
                setIsLoading(false);
                setError("Email already registered!");
            }
        }
    };

    return (
        <>
            <div className="m-0 p-0 box-border flex items-center justify-center flex-col h-screen">
                <div className="bg-white rounded-[30px] shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px]">
                    <div className="absolute top-0 h-full transition-all ease-in-out right-10 opacity-100 z-50">
                        <form onSubmit={(e) => handleRegister(e)} encType="multipart/form-data" className="bg-white flex items-center justify-center flex-col py-0 px-10 h-full">
                            <h1 className="mb-3 text-3xl text-orange font-bold">Create Account</h1>
                            <span className="text-sm text-dark-blue mb-2">or use your email for registeration</span>
                            {error !== '' && (
                                <div role="alert" className="alert alert-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="text-sm">{error}</span>
                                </div>
                            )}
                            <input name="username" type="text" placeholder="Username" className="bg-[#eee] border-none my-2 mx-0 py-3 px-4 text-sm rounded-lg w-full outline-none text-orange" required />
                            <input name="email" type="email" placeholder="Email" className="bg-[#eee] border-none my-2 mx-0 py-3 px-4 text-sm rounded-lg w-full outline-none text-orange" required />
                            <input name="password" type="password" placeholder="Password" className="bg-[#eee] border-none my-2 mx-0 py-3 px-4 text-sm rounded-lg w-full outline-none text-orange" required />
                            <input name="repeat_password" type="password" placeholder="Repeat Password" className="bg-[#eee] border-none my-2 mx-0 py-3 px-4 text-sm rounded-lg w-full outline-none text-orange" required />
                            <button disabled={isLoading} type="submit" className="btn w-full uppercase font-bold text-blue hover:text-white bg-bone-pink border-bone-pink hover:bg-orange hover:border-bone-pink text-sm py-3 px-11 border border-solid border-transparent rounded-lg tracking-[0.5px] mt-3 cursor-pointer">
                                {!isLoading ? 'Register' : (
                                    <span className="loading loading-spinner loading-md"></span>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="absolute top-0 right-1/2 w-1/2 h-full overflow-hidden transition-all ease-in-out rounded-r-[20%] z-[1000]">
                        <div className="bg-primary h-full w-[200%] bg-gradient-to-l from-bone-pink to-orange text-white relative -left-full transition-all ease-in-out translate-x-1/2">
                            <div className="absolute w-1/2 h-full flex items-center justify-center flex-col py-0 px-8 text-center top-0 transition-all ease-in-out translate-x-0">
                                <h1 className="text-3xl font-bold">Welcome Back!</h1>
                                <p className="text-base leading-5 tracking-[0.3px] my-5 mx-0">Enter your personal details to use all of site features</p>
                                <Link href="/login" className="bg-primary hover:bg-white text-white hover:text-orange text-sm py-3 px-11 border-solid border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-3 cursor-pointer bg-transparent border border-white transition" id="register">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
