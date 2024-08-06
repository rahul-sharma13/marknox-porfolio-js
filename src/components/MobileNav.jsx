import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-portColor" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-32 text-center text-2xl">
                    <Link to="/">
                        <h1 className="text-4xl font-semibold">
                            Rahul<span className=" text-portColor">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link to={link.path} key={index} className={`${pathname === link.path && "text-portColor border-b-2 border-portColor"}
               text-xl capitalize hover:text-portColor transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;