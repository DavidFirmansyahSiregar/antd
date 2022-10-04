import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PageLayout } from "../Layout/PageLayout";

import { Profile } from "../Pages/Profile";
import { About } from "../Pages/About";
import { SidebarPageOne } from "../Pages/SidebarPageOne";
import { SidebarPageTwo } from "../Pages/SidebarPageTwo";


export const MainRoutes = () => {
    return (
        <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/sidebar-page-one" element={<SidebarPageOne />} />
                    <Route path="/sidebar-page-two" element={<SidebarPageTwo />} />
                    <Route path="/" element={<Navigate to={'/profile'} replace />} />
                </Route>
        </Routes>
    );
};