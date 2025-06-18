import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <div className="logo">
                <p>LOGO</p>
            </div>
            <Navigation />
        </header>
    );
}
