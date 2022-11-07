import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProfileUpdate from '../pages/ProfileUpdate';
import Forgotpassword from '../pages/Forgotpassword';
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
    return (
        <div>            
            <Routes>
                <Route
                    path="/"
                    element={
                        <Signup />
                    }
                ></Route>
                <Route
                    path="/signup"
                    element={
                        <Signup />
                    }
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfileUpdate />
                        </PrivateRoute>
                    }
                ></Route>

                <Route
                    path={"/forgot"}
                    element={
                        <Forgotpassword />
                    }></Route>
            </Routes>
        </div>
    );
}
