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
            setError("Passwords do not match!");
            setIsLoading(false);

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
                setError("Email already registered!");
                setIsLoading(false);
            }
        }
    };

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-[1000px] h-[650px] flex justify-center items-center bg-blue shadow-md shadow-orange rounded-lg">
                    <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                        <Image width={500} height={500} src="/login-office-dark.jpeg" alt="login image" className="h-[650px] rounded-l-lg" />
                    </div>

                    <div className="px-4 md:px-0 lg:w-6/12">
                        <div className="md:mx-6 md:p-12">
                            <div className="text-center">
                                <h4 className="mb-3 mt-1 pb-1 text-xl font-semibold text-orange">
                                    Welcome to NextJS App
                                </h4>
                            </div>

                            <form onSubmit={(e) => handleRegister(e)} encType="multipart/form-data">
                                <h1 className="mb-3 font-semibold text-bone-pink">Register</h1>

                                {error !== '' && (
                                    <div role="alert" className="alert alert-error">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="text-sm">{error}</span>
                                    </div>
                                )}

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-bone-pink">Username</span>
                                    </div>
                                    <input type="text" name="username" placeholder="Ucup Doe" className="input input-bordered w-full text-orange bg-dark-blue" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-bone-pink">Email</span>
                                    </div>
                                    <input type="email" name="email" placeholder="Ucup@example.com" className="input input-bordered w-full text-orange bg-dark-blue" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-bone-pink">Password</span>
                                    </div>
                                    <input type="password" name="password" placeholder="••••••••" className="input input-bordered w-full text-orange bg-dark-blue" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-bone-pink">Repeat Password</span>
                                    </div>
                                    <input type="password" name="repeat_password" placeholder="••••••••" className="input input-bordered w-full text-orange bg-dark-blue" />
                                </label>

                                <div className="my-5 text-center">
                                    <button type="submit" className="btn w-full uppercase font-bold text-blue bg-bone-pink border-bone-pink hover:text-bone-pink hover:bg-blue hover:border-bone-pink">
                                        {!isLoading ? 'Register' : (
                                            <span className="loading loading-spinner loading-md"></span>
                                        )}
                                    </button>
                                </div>

                                <div className="flex items-center">
                                    <p className="mb-0 mr-2 text-orange">Don`t have an account?</p>
                                    <Link href="/login" className="link font-bold text-bone-pink hover:text-orange transition">Login here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
