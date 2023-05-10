import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./component/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import FindEmail from "./pages/FindEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Main />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/signup",
        element : <SignUp />
    },
    {
        path : "/find/email",
        element : <FindEmail />
    },
    {
        path : "/forgot/password",
        element : <ForgotPassword />
    },
    {
        path : "/profile",
        element : <Profile />
    },
    {
        path : "/:productId",
        element : <ProductDetail />
    }
])

export default Router;