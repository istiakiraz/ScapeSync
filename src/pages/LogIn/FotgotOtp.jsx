import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router";
import { IoChevronBack } from "react-icons/io5";

export default function ForgotOtp() {
  const location = useLocation();
  const [apiData, setApiData] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [otpValues, setOtpValues] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Refs for inputs
  const inputRefs = useRef([]);

  useEffect(() => {
    if (location.state?.apiData) {
      setApiData(location.state.apiData);
      // console.log("Initial OTP:", location.state.apiData.data.email);
    }
  }, [location.state]);

  // Handle OTP input
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otpValues];
      newOtp[index] = value;
      setOtpValues(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Verify OTP
  const handleVerify = async () => {
    const otp = otpValues.join("");
    if (otp.length < 6) {
      alert("Please enter the full 6-digit OTP");
      return;
    }

    if (!apiData?.data?.email) {
      alert("❌ Email not found!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://apitest.softvencefsd.xyz/api/verify_otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: apiData.data.email,
          otp: otp,
        }),
      });

      const data = await res.json();
      console.log("Verify Response:", data);

      if (res.ok) {
        alert("✅ OTP Verified Successfully!");

        navigate('/new-pass')

      } else {
        alert("❌ Verification Failed: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResend = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://apitest.softvencefsd.xyz/api/resend_otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: apiData?.data?.email }),
      });

      const data = await res.json();
      console.log("Resend Response:", data);

      if (res.ok) {
        setApiData(data);
        setShowModal(true);
      } else {
        alert("❌ Resend Failed: " + (data.message || "Unknown error"));
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

      {/* OTP Modal */}
      {showModal && (
        <dialog open className="modal modal-open">
          <div className="modal-box text-center">
            <h3 className="font-bold text-2xl ">Your OTP</h3>
            <p className="py-4 text-2xl mt-2 tracking-widest text-green-600">
              {apiData?.data?.otp || "No OTP"}
            </p>
            <div className="modal-action justify-center">
              <button
                className="btn transition-transform duration-300 ease-in-out 
                            text-white hover:scale-105 shadow-[0px_13px_22px_-6px_rgba(59,163,52,0.67)] 
                            border-none px-6 rounded-[8px] bg-[#3ba334]"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

      {/* OTP Page Content */}
      {!showModal && (
        <div className="flex flex-col items-start max-w-[500px] mx-auto justify-center flex-1">
          <Link to='/forgot-password' >
            <button className="flex items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer mb-10 gap-1" ><IoChevronBack color='#3ba334' size={20} /> <p className="text-xm text-[#3ba334] " >Back</p>
            </button>
          </Link>
          <h2 className="text-3xl mx-auto font-bold mb-2">Please check your email!</h2>
          <p className="text-gray-500 mb-8 text-center max-w-md">
            We’ve emailed a 6-digit confirmation code to{" "}
            <span className="font-medium">{apiData?.data?.email}</span>, <br />
            please enter the code below to verify your email.
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-center mx-auto gap-3 mb-6">
            {otpValues.map((val, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={val}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="input input-bordered w-12 h-12 text-center text-xl"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={loading}
            className="btn transition-transform duration-300 ease-in-out 
                            text-white hover:scale-105 shadow-[0px_13px_22px_-6px_rgba(59,163,52,0.67)] 
                            border-none px-6 rounded-[8px] bg-[#3ba334] w-full mb-4 "
          >
            {loading ? "Verifying..." : "Verify"}
          </button>

          {/* Resend */}
          <p className="text-sm mx-auto text-gray-600 mt-4">
            Don’t have a code?{" "}
            <button
              onClick={handleResend}
              disabled={loading}
              className="text-green-600 font-medium hover:underline"
            >
              Resend code
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

