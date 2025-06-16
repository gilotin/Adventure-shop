import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Bazaar } from "../features/Bazaar/Bazaar";
import { VoidMarket } from "../features/VoidMarket/VoidMarket";

export function AppRouter() {
    return (
        <Routes>
            {/* Default layout */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Bazaar />} />
                <Route path="/void-market" element={<VoidMarket />} />
            </Route>
        </Routes>
    );
}
