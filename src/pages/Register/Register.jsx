import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Register() {
    // States
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.terms) {
            alert("You must agree to the Terms & Privacy Policy");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("https://apitest.softvencefsd.xyz/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),

            });

            const data = await res.json();
            console.log("API Response:", data);

            if (data.status === 201) {
                navigate("/otp", { state: { apiData: data } });
            }



            if (res.ok) {
                alert("✅ Registration successful!");
            } else {
                alert("❌ Registration failed: " + (data.message || "Unknown error"));
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
            <div className="flex items-center justify-center mt-20">
                <div className="w-full max-w-[500px] p-8">
                    <h2 className="text-3xl font-semibold text-center">
                        Create your Account
                    </h2>
                    <p className="text-center text-gray-500 mb-14 mt-1">
                        When sports Meets smart Tech.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        {/* First & Last Name */}
                        <div className="flex gap-3">
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="input input-bordered rounded h-14 w-full"
                            />
                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="input input-bordered h-14 w-full"
                            />
                        </div>

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
                                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible size={22} />
                                ) : (
                                    <AiOutlineEye size={22} />
                                )}
                            </span>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="input input-bordered h-14 w-full pr-10"
                            />
                            <span
                                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                onClick={() => setShowConfirm(!showConfirm)}
                            >
                                {showConfirm ? (
                                    <AiOutlineEyeInvisible size={22} />
                                ) : (
                                    <AiOutlineEye size={22} />
                                )}
                            </span>
                        </div>

                        {/* Terms & Conditions */}
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="checkbox checkbox-sm"
                            />
                            <span>
                                I agree to Tech Takes{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Privacy Policy
                                </a>
                                .
                            </span>
                        </label>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn transition-transform duration-300 ease-in-out 
                            text-white hover:scale-105 shadow-[0px_13px_22px_-6px_rgba(59,163,52,0.67)] 
                            border-none px-6 rounded-[8px] bg-[#3ba334] my-8 w-full"
                        >
                            {loading ? "Creating..." : "Create Account"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="h-px flex-1 bg-gray-300"></div>
                        <span className="text-gray-400 text-sm">OR</span>
                        <div className="h-px flex-1 bg-gray-300"></div>
                    </div>

                    {/* Google Button */}
                    <button className="btn w-full bg-white border border-gray-300 hover:bg-gray-100">
                        <FcGoogle size={22} />
                        <span>Continue with Google</span>
                    </button>

                    {/* Footer Link */}
                    <p className="text-center text-sm mt-5">
                        Don’t have an account?{" "}
                        <Link to="/login" className="text-green-600 font-medium">
                            Get started
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
