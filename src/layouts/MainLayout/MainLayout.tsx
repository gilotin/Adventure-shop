// © 2025 Nikolay Toshev – See LICENSE.md for usage and restrictions

import { Outlet } from "react-router-dom";
import { Header } from "../../shared/Header/Header";
import { Footer } from "../../shared/Footer/Footer";
import styles from "./MainLayout.module.css";

export function MainLayout() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
