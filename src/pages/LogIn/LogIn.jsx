import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LogIn() {
    // States
    const [formData, setFormData] = useState({

        email: "",
        password: "",
        remember_me: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        console.log(formData)
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();


        setLoading(true);

        try {
            const res = await fetch("https://apitest.softvencefsd.xyz/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),

            });

            const data = await res.json();
            // console.log("API Response:", data);

            // if (data.status === true) {
            //     navigate("/");
            // }



            if (res.ok) {
                alert("✅ Log in successful!");
                navigate("/");
            } else {
                alert("❌ Log in failed: " + (data.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Error:", error);
            alert("❌ Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="2xl:w-9/12 mx-auto w-11/12 min-h-screen">
            {/* Logo */}
            <div className="pt-10">
                <Link to="/">
                    <img className="w-32" src={logo} alt="logo" />
                </Link>
            </div>

            {/* Register Form */}
            <div className="flex items-center justify-center mt-14">
                <div className="w-full max-w-[500px] p-8">
                    <h2 className="text-3xl font-semibold text-center">
                        Welcome to ScapeSync
                    </h2>
                    <p className="text-center text-gray-500 mb-14 mt-1">
                        Please share your login details so you can access the website.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 space-y-4">


                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="input input-bordered h-14 w-full"
                        />

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="input input-bordered h-14 w-full pr-10"
                            />
                            <span
                                className="absolute right-3 top-4 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible size={22} />
                                ) : (
                                    <AiOutlineEye size={22} />
                                )}
                            </span>
                        </div>

                        {/* Terms & Conditions */}
                    <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                name="remember_me"
                                checked={formData.remember_me}
                                onChange={handleChange}
                                className="checkbox checkbox-sm"
                            />
                            <span>
                                Remember Me
                            </span>
                        </label>

                        <Link to='/forgot-password' ><p className="text-[#3ba334] hover:underline transition-transform duration-300 ease-in-out  " >Forgot password?</p></Link>
                    </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn transition-transform duration-300 ease-in-out 
                            text-white hover:scale-105 shadow-[0px_13px_22px_-6px_rgba(59,163,52,0.67)] 
                            border-none px-6 rounded-[8px] bg-[#3ba334] my-8 w-full"
                        >
                            {loading ? "Login..." : "Log In"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="h-px flex-1 bg-gray-300"></div>
                        <span className="text-gray-400 text-sm">OR</span>
                        <div className="h-px flex-1 bg-gray-300"></div>
                    </div>

                    {/* Google Button */}
                    <Link target="_blank" to='https://firebase.google.com/docs/auth' >   <button className="btn w-full bg-white border border-gray-300 hover:bg-gray-100">
                        <FcGoogle size={22} />
                        <span>Continue with Google</span>
                    </button> </Link>

                    {/* Footer Link */}
                    <p className="text-center text-sm mt-5">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-green-600 font-medium">
                            Get started
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

