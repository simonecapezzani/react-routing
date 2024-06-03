import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css';

// NavLink component automatically gets the isActive prop via className

function MainNavigation() {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                        // the end prod indicates that the link should be active if the url ends with this address ( "/" )
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? classes.active : undefined} to='/products'>
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;