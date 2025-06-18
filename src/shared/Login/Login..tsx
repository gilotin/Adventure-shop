// © 2025 Nikolay Toshev – See LICENSE.md for usage and restrictions

import styles from "./Login.module.css";
import { NavLink } from "react-router";

export function Login() {
    return (
        <>
            <div>
                <form action="" id="login-form" className={styles.form}>
                    <label htmlFor="login-form">Login</label>
                    <label htmlFor="account"> account</label>
                    <input type="text" placeholder="Enter your ID" id="account" />
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        current-password
                        placeholder="Enter your pass"
                    />
                    <button type="submit">Login</button>
                    <NavLink to="/register">Need registration?</NavLink>
                </form>
            </div>
        </>
    );
}
