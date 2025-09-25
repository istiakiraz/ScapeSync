import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Otp from "../pages/Register/Otp";

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

])