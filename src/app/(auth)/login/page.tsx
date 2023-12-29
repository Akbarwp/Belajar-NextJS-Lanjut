import Image from "next/image";
import Link from "next/link";

// Contoh penggunaan Group Routing membuat route Login tanpa harus ada URL '/auth'
export default function Login() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-[1000px] h-[500px] flex justify-center items-center bg-blue shadow-md shadow-bone-pink rounded-lg">
                    <div className="px-4 md:px-0 lg:w-6/12">
                        <div className="md:mx-6 md:p-12">
                            <div className="text-center">
                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-bone-pink">
                                    Welcome to NextJS App
                                </h4>
                            </div>

                            <form>
                                <h1 className="mb-3 font-semibold text-orange">Login</h1>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-orange">Email</span>
                                    </div>
                                    <input type="email" placeholder="Ucup@example.com" className="input input-bordered w-full text-bone-pink bg-dark-blue" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-orange">Password</span>
                                    </div>
                                    <input type="password" placeholder="••••••••" className="input input-bordered w-full text-bone-pink bg-dark-blue" />
                                </label>

                                <div className="my-5 text-center">
                                    <button className="btn w-full uppercase font-bold text-blue bg-orange border-orange hover:text-orange hover:bg-blue hover:border-orange">Login</button>
                                </div>

                                <div className="flex items-center">
                                    <p className="mb-0 mr-2 text-bone-pink">Don`t have an account?</p>
                                    <Link href="/register" className="link font-bold text-orange hover:text-bone-pink transition">Register here</Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                        <Image width={500} height={500} src="/login-office-dark.jpeg" alt="login image" className="h-[500px] rounded-r-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}
