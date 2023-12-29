import Image from "next/image";
import Link from "next/link";

export default function Register() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-[1000px] h-[500px] flex justify-center items-center bg-blue shadow-md shadow-orange rounded-lg">
                    <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                        <Image width={500} height={500} src="/login-office-dark.jpeg" alt="login image" className="h-[500px] rounded-l-lg" />
                    </div>

                    <div className="px-4 md:px-0 lg:w-6/12">
                        <div className="md:mx-6 md:p-12">
                            <div className="text-center">
                                <h4 className="mb-3 mt-1 pb-1 text-xl font-semibold text-orange">
                                    Welcome to NextJS App
                                </h4>
                            </div>

                            <form>
                                <h1 className="mb-3 font-semibold text-bone-pink">Register</h1>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-bone-pink">Username</span>
                                    </div>
                                    <input type="text" placeholder="Ucup Doe" className="input input-bordered w-full text-orange bg-dark-blue" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-bone-pink">Email</span>
                                    </div>
                                    <input type="email" placeholder="Ucup@example.com" className="input input-bordered w-full text-orange bg-dark-blue" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-bone-pink">Password</span>
                                    </div>
                                    <input type="password" placeholder="••••••••" className="input input-bordered w-full text-orange bg-dark-blue" />
                                </label>

                                <div className="my-5 text-center">
                                    <button className="btn w-full uppercase font-bold text-blue bg-bone-pink border-bone-pink hover:text-bone-pink hover:bg-blue hover:border-bone-pink">Register</button>
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
