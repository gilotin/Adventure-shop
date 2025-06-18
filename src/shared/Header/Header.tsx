// © 2025 Nikolay Toshev – See LICENSE.md for usage and restrictions

import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <p>LOGO</p>
            </div>
            <Navigation />
        </header>
    );
}
