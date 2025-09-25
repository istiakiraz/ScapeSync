// import React, { useEffect, useState, useRef } from "react";
// import logo from "../../assets/logo.png";
// import { Link, useLocation } from "react-router";

// export default function Otp() {
//   const location = useLocation();
//   const [apiData, setApiData] = useState(null);
//   const [showModal, setShowModal] = useState(true);
//   const [otpValues, setOtpValues] = useState(new Array(6).fill(""));

//   // Refs for auto-focus
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     if (location.state?.apiData) {
//       setApiData(location.state.apiData);
//       console.log("OTP :", location.state.apiData.data.otp);
//     }
//   }, [location.state]);

//   // Handle OTP input
//   const handleChange = (value, index) => {
//     if (/^[0-9]?$/.test(value)) {
//       const newOtp = [...otpValues];
//       newOtp[index] = value;
//       setOtpValues(newOtp);

//       // Auto focus next
//       if (value && index < 5) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   // Handle Backspace
//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otpValues[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handleSubmitOtp = () => {
//     const otp = otpValues.join("");
//     console.log("Entered OTP:", otp);
//     alert("Entered OTP: " + otp);
//   };

//   return (
//     <div className="2xl:w-9/12 mx-auto w-11/12 min-h-screen">
//       {/* Logo */}
//       <div className="pt-10">
//         <Link to="/">
//           <img className="w-32" src={logo} alt="logo" />
//         </Link>
//       </div>

//       {/* DaisyUI Modal */}
//       {showModal && (
//         <dialog open className="modal modal-open">
//           <div className="modal-box text-center">
//             <h3 className="font-bold text-lg">Your OTP</h3>
//             <p className="py-4 text-2xl tracking-widest text-green-600">
//               {apiData?.data?.otp || "No OTP"}
//             </p>
//             <div className="modal-action justify-center">
//               <button
//                 className="btn bg-green-600 text-white"
//                 onClick={() => setShowModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}

//       {/* OTP Input Fields */}
//       {!showModal && (
//         <div className="mt-16 text-center">
//           <h2 className="text-2xl font-bold">Enter OTP</h2>
//           <div className="flex justify-center gap-3 mt-6">
//             {otpValues.map((val, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 type="text"
//                 maxLength="1"
//                 value={val}
//                 onChange={(e) => handleChange(e.target.value, index)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//                 className="input input-bordered w-12 h-12 text-center text-xl"
//               />
//             ))}
//           </div>
//           <button
//             onClick={handleSubmitOtp}
//             className="btn bg-green-600 text-white mt-6"
//           >
//             Verify OTP
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router";

export default function Otp() {
  const location = useLocation();
  const [apiData, setApiData] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [otpValues, setOtpValues] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);

  // Refs for inputs
  const inputRefs = useRef([]);

  useEffect(() => {
    if (location.state?.apiData) {
      setApiData(location.state.apiData);
      console.log("Initial OTP:", location.state.apiData.data.otp);
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

    setLoading(true);
    try {
      const res = await fetch("https://apitest.softvencefsd.xyz/api/verify_otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();
      console.log("Verify Response:", data);

      if (res.ok) {
        alert("✅ OTP Verified Successfully!");
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
        body: JSON.stringify({ email: apiData?.data?.email }), // ✅ email পাঠানো ভালো
      });

      const data = await res.json();
      console.log("Resend Response:", data);

      if (res.ok) {
        setApiData(data);
        setShowModal(true); // নতুন OTP modal এ দেখাবে
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
            <h3 className="font-bold text-lg">Your OTP</h3>
            <p className="py-4 text-2xl tracking-widest text-green-600">
              {apiData?.data?.otp || "No OTP"}
            </p>
            <div className="modal-action justify-center">
              <button
                className="btn bg-green-600 text-white"
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
        <div className="flex flex-col items-center justify-center flex-1">
          <h2 className="text-2xl font-bold mb-2">Please check your email!</h2>
          <p className="text-gray-500 mb-8 text-center max-w-md">
            We’ve emailed a 6-digit confirmation code to{" "}
            <span className="font-medium">{apiData?.data?.email}</span>, <br />
            please enter the code below to verify your email.
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-3 mb-6">
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
            className="btn bg-green-600 text-white w-full max-w-sm h-12 text-lg"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>

          {/* Resend */}
          <p className="text-sm text-gray-600 mt-4">
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

