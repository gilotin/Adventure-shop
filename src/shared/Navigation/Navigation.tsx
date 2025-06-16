import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export function Navigation() {
    return (
        <>
            <nav className={styles.container}>
                <div>
                    <NavLink className={styles.bazaar} to="/">
                        Bazaar
                    </NavLink>
                    <NavLink to="/void-market">Void Market</NavLink>
                    <NavLink to="/adventure">Adventure</NavLink>
                </div>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
            </nav>
        </>
    );
}
