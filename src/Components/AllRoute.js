import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Forgotpassword from '../pages/Forgotpassword';
import Setpassword from '../pages/Setpassword';
import { PrivateRoute } from './PrivateRoute'
import Updateprofile from '../pages/Updateprofile';

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
                            <Profile />
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/update"
                    element={
                        <Updateprofile />
                    }
                ></Route>

                <Route
                    path={"/forgot"}
                    element={                        
                            <Forgotpassword />                        
                    }></Route>
                <Route
                    path={"/newpassword"}
                    element={                        
                            <Setpassword />                        
                    }></Route>
            </Routes>
        </div>
    );
}
