import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Bazaar } from "../features/Bazaar/Bazaar";
import { VoidMarket } from "../features/VoidMarket/VoidMarket";
import { Login } from "../shared/Login/Login.";
import { Register } from "../shared/Register/Register";

export function AppRouter() {
    return (
        <Routes>
            {/* Default layout */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Bazaar />} />
                <Route path="/void-market" element={<VoidMarket />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
}
