/**
 * Nav Component
 *
 * Renders a navigation bar with links based on the current location.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */

import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
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

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link to={link.path} key={index} className={`${link.path === pathname && "text-portColor border-b-2 border-portColor"} capitalize hover:text-portColor font-medium transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
