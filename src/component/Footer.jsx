const Footer = () => {
    return (
        <footer className="py-5 bg-slate-50 flex flex-col md:flex-row justify-between items-center px-4 border-t border-gray-300">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm text-gray-600">
                    &copy; 2024 Khushboo Bharti <span>All Rights Reserved</span>
                </p>
            </div>
            <div className="flex flex-wrap gap-4">
                <a href="/about" className="text-blue-600 hover:text-blue-800 border-b border-transparent hover:border-blue-600 transition duration-300">About</a>
                <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 border-b border-transparent hover:border-blue-600 transition duration-300">Privacy Policy</a>
                <a href="/licensing" className="text-blue-600 hover:text-blue-800 border-b border-transparent hover:border-blue-600 transition duration-300">Licensing</a>
                <a href="/contact" className="text-blue-600 hover:text-blue-800 border-b border-transparent hover:border-blue-600 transition duration-300">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;
