import { NavLink } from "react-router-dom";
import classes from "./MainNavLink.module.css";

const MainNavLink = () => {
    return (
        <header className={classes.header}>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? classes.active : ''}>
                        首頁</NavLink>
                </li>
                <li>
                    <NavLink to="/university"
                        className={({ isActive }) =>
                            isActive ? classes.active : ''}>
                        找美國的大學</NavLink>
                </li>
                <li>
                    <NavLink to="/highSchool"
                        className={({ isActive }) =>
                            isActive ? classes.active : ''}>
                        移民到美國找適合的學校</NavLink>
                </li>
            </ul>
        </header>
    );
}
export default MainNavLink;
