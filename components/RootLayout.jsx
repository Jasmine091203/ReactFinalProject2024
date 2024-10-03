import { Outlet } from "react-router-dom";
// import MainNavigation from "./MainNavigation";
import MainNavLink from "./MainNavLink";

const RootLayout = () => {
    return (
        <div>
            <MainNavLink />
            
            <Outlet />
        </div>
    );
}
export default RootLayout;
