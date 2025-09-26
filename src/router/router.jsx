import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Otp from "../pages/Register/Otp";
import Success from "../pages/Register/Success";
import LogIn from "../pages/LogIn/LogIn";
import Forgot from "../pages/LogIn/Forgot";
import ForgotOtp from "../pages/LogIn/FotgotOtp";
import NewPass from "../pages/LogIn/NewPass";

export const router = createBrowserRouter([

    {
        path: "/",
        Component: Mainlayouts,
        children: [
            {
                index: true,
                Component: Home
            },
        ]

    },
    {
        path: "register",
        Component: Register,
    },
    {
        path: "otp",
        Component: Otp,
    },
    {
        path: "success",
        Component: Success,
    },
    {
        path: "login",
        Component: LogIn,
    },
    {
        path: "forgot-password",
        Component: Forgot,
    },
    {
        path: "forgot-otp",
        Component: ForgotOtp,
    },
    {
        path: "new-pass",
        Component: NewPass,
    },

])