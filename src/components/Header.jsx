/*
 * Header component - contains the navigation and logo of the website
 */

import { Link } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            {/* container for header content */}
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-4xl font-semibold">
                        Rahul<span className="text-portColor">.</span>
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link to="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile menu only on suitable screen size */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;