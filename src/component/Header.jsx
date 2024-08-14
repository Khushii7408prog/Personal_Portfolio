import { useState } from "react";

const Header = () => {
    const [brandName, setBrandName] = useState("Khushboo Bharti");
    const [menuLinks, setMenuLinks] = useState([
        { title: "Home", link: "/home", id: 1 },
        { title: "About", link: "/about", id: 2 },
        { title: "Skills", link: "/skills", id: 3 },
        { title: "Portfolio", link: "/portfolio", id: 4 },
        { title: "Contact", link: "/contact", id: 5 },
    ]);

    const [actionButton, setActionButton] = useState({
        title: "Hire Me",
        link: "/hire-me",
    });

    return (
        <header className="h-20 flex justify-between items-center px-16 bg-gray-100 shadow-lg">
            <div className="flex items-center">
                {/* Brand and logo */}
                <h1 className="text-2xl font-bold">{brandName}</h1>
            </div>

            <nav className="flex space-x-6">
                {/* Menu links */}
                {menuLinks.map(link => (
                    <a
                        key={link.id}
                        href={link.link}
                        className="hover:text-blue-500 transition"
                    >
                        {link.title}
                    </a>
                ))}
            </nav>

            <div className="flex items-center">
                {/* Button */}
                <a
                    href={actionButton.link}
                    className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition"
                >
                    {actionButton.title}
                </a>
            </div>
        </header>
    );
};

export default Header;
