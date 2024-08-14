const Services = () => {
    return (
        <div className="main-container py-16 bg-gray-50">
            <h1 className="text-5xl font-bold text-center underline mb-12">My Services</h1>

            <div className="services-container grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    className="service-item text-center md:text-left p-8 rounded-lg shadow-md min-h-[calc(100vh/4)] flex flex-col justify-between cursor-pointer bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                    <i className="fa-brands fa-java text-5xl mb-4 self-center"></i>
                    <h2 className="text-4xl font-semibold mb-4">Java Developer</h2>
                    <p className="mb-4">A Java Developer is a programmer who designs, develops, and manages Java-based applications and software.</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 mt-4 self-center transition-colors duration-300">Check</button>
                </div>

                <div
                    className="service-item text-center md:text-left p-8 rounded-lg shadow-md min-h-[calc(100vh/4)] flex flex-col justify-between cursor-pointer bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                    <i className="fa-solid fa-server text-5xl mb-4 self-center"></i>
                    <h2 className="text-4xl font-semibold mb-4">Backend Developer</h2>
                    <p className="mb-4">A Backend Developer focuses on server-side logic, databases, and ensuring that the front-end works seamlessly with the backend.</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 mt-4 self-center transition-colors duration-300">Check</button>
                </div>

                <div
                    className="service-item text-center md:text-left p-8 rounded-lg shadow-md min-h-[calc(100vh/4)] flex flex-col justify-between cursor-pointer bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                    <i className="fa-solid fa-database text-5xl mb-4 self-center"></i>
                    <h2 className="text-4xl font-semibold mb-4">Database Developer</h2>
                    <p className="mb-4">A Database Developer manages and organizes data, ensuring data integrity and optimizing database performance.</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 mt-4 self-center transition-colors duration-300">Check</button>
                </div>

                <div
                    className="service-item text-center md:text-left p-8 rounded-lg shadow-md min-h-[calc(100vh/4)] flex flex-col justify-between cursor-pointer bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                    <i className="fa-solid fa-code text-5xl mb-4 self-center"></i>
                    <h2 className="text-4xl font-semibold mb-4">Front-End Developer</h2>
                    <p className="mb-4">A Front-End Developer creates the visual components and user interface of a website or web application.</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 mt-4 self-center transition-colors duration-300">Check</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
