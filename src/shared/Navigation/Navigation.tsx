import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <>
            <nav className="navigation">
                <NavLink to="/">Bazaar</NavLink>
                <NavLink to="/void-market">Void Market</NavLink>
                <NavLink to="/adventure">Adventure</NavLink>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
            </nav>
        </>
    );
}
