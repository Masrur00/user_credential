import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const isAuth = useSelector((state) => state.isAuth);

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};