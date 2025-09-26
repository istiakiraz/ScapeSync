import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router";
import { IoChevronBack } from "react-icons/io5";

export default function Forgot() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://apitest.softvencefsd.xyz/api/resend_otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await res.json();
      console.log("Forgot Password Response:", data);

       if (data.status === 201) {
                navigate("/forgot-otp", { state: { apiData: data } });
            }

      if (res.ok) {
        alert("✅ OTP sent to your email!");
      } else {
        alert("❌ Failed: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="2xl:w-9/12 mx-auto w-11/12 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="pt-10">
        <Link to="/">
          <img className="w-32" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex flex-col items-start max-w-[500px] mx-auto justify-center flex-1">
        <Link to="/login">
          <button className="flex items-start hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer mb-10 gap-1">
            <IoChevronBack color="#3ba334" size={20} />{" "}
            <p className="text-xm text-[#3ba334] ">Back</p>
          </button>
        </Link>
        <h2 className="text-3xl mx-auto font-bold mb-2">Forgot your password?</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Please enter the email address associated with your account, and we'll email you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="w-11/12 mx-auto">
          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="input input-bordered h-14 min-w-full"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn transition-transform duration-300 ease-in-out 
                      text-white hover:scale-105 shadow-[0px_13px_22px_-6px_rgba(59,163,52,0.67)] 
                      border-none px-6 rounded-[8px] bg-[#3ba334] mx-auto my-8 w-full"
          >
            {loading ? "Loading..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

