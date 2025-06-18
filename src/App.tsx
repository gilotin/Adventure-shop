// © 2025 Nikolay Toshev – See LICENSE.md for usage and restrictions

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export default function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}
