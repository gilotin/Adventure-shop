// © 2025 Nikolay Toshev – See LICENSE.md for usage and restrictions

import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export function Navigation() {
    const user = false;
    return (
        <>
            <nav className={styles.container}>
                {user ? (
                    <div>
                        <div className={styles.main_nav}>
                            <NavLink className={styles.bazaar} to="/">
                                Bazaar
                            </NavLink>
                            <NavLink to="/void-market">Void Market</NavLink>
                            <NavLink to="/adventure">Adventure</NavLink>
                        </div>
                        <div>
                            <NavLink to="/profile">Profile</NavLink>
                        </div>
                    </div>
                ) : (
                    <div>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </div>
                )}
            </nav>
        </>
    );
}
