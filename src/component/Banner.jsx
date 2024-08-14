import React, { useEffect, useRef } from 'react';
import bannerImage from '../assets/Khushboo.jpg';
import BannerBackground from "../assets/background_wallpaper.jpg";
import Typed from 'typed.js';

const Banner = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Java Developer","Backend Developer","Frontend Developer"],
            startDelay: 500,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 100,
            loop: true,
        });

        return () => {
            typed.destroy(); // Correctly call destroy method
        };
    }, []);

    return (
        <div
            className="main-container flex flex-col md:flex-row items-center justify-between py-10 px-6"
            style={{
                backgroundImage: `url(${BannerBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='w-full md:w-1/2 flex flex-col justify-center items-start md:items-start md:pr-10'>
                {/* Text Section */}
                <h3 className='text-3xl font-semibold mb-2'>Hi, I am</h3>
                <h1 className='text-5xl font-bold mb-4'>Khushboo Bharti</h1>
                <h2 className='text-3xl mb-4'>
                    I am <span className='font-bold underline' ref={el}></span>
                </h2>
                <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                    I am a passionate Java Developer with over 2 years of experience in building scalable web applications and solving complex problems. I specialize in Java Spring Boot, RESTful APIs, and have a strong foundation in cloud technologies like AWS. I enjoy tackling new challenges and continuously improving my skills. Currently, I am looking for opportunities to contribute to innovative projects and grow my expertise in software development.
                </p>
                <div className="icons-container flex space-x-4 mb-6">
                    <a
                        href="https://www.linkedin.com/in/khushboo-bharti-386332200"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-blue-500 border cursor-pointer w-12 h-12 rounded-full flex justify-center items-center bg-gray-800"
                    >
                        <i className="fa-brands fa-linkedin text-white text-xl"></i>
                    </a>
                    <a
                        href="https://github.com/Khushii7408prog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-blue-500 border cursor-pointer w-12 h-12 rounded-full flex justify-center items-center bg-gray-800"
                    >
                        <i className="fa-brands fa-github text-white text-xl"></i>
                    </a>
                    <a
                        href="mailto:khushboobharti342@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-blue-500 border cursor-pointer w-12 h-12 rounded-full flex justify-center items-center bg-gray-800"
                    >
                        <i className="fa-solid fa-envelope text-white text-xl"></i>
                    </a>
                </div>
                <a
                    href="/contact"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
                >
                    Contact Me
                </a>
            </div>
            <div className='w-full md:w-1/2 flex justify-center mt-8 md:mt-0'>
                {/* Image Section */}
                <img src={bannerImage} alt="Khushboo Bharti" className="rounded-full shadow-lg w-3/4 max-w-md" />
            </div>
        </div>
    );
};

export default Banner;
