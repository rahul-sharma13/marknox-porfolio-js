import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/rahul-sharma13" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rahul-sharma-a21916226/" },
    { icon: <FaTwitter />, path: "https://twitter.com/Kraken_3102" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/u/rahul-sharma13/" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => { // maps through the socials array and returns a Link component for each item
                return <Link key={index} to={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social