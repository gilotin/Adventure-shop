import { Outlet } from "react-router-dom";
import { Navigation } from "../../shared/Navigation/Navigation";
import styles from "./MainLayout.module.css";

export function MainLayout() {
    return (
        <>
            <header className={styles.header}>
                <div className="logo">
                    <p>LOGO</p>
                </div>
                <Navigation />
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                <p>Adventure shop created by Nikolay Toshev all rights reserved.</p>
            </footer>
        </>
    );
}
