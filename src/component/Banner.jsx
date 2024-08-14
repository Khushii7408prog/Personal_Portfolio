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
            loop:true,
        });

        return () => {
            typed.destroy(); // Correctly call destroy method
        };
    }, []);

    return (
        <div
            className="main-container flex items-center justify-between py-10"
            style={{
                backgroundImage: `url(${BannerBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='border w-full flex justify-center items-center'>
                {/* Text Section */}
                <div className='w-2/3'>
                    <h3 className='mt-3 text-3xl font-semibold'>Hi, I am</h3>
                    <h1 className='mt-3 text-4xl font-bold'>Khushboo Bharti</h1>
                    <h2 className='mt-3 text-3xl'>
                         I am <span className='font-bold underline' ref={el}></span>
                    </h2>
                    <p className='mt-3 text-lg text-gray-600'>
                        I am a passionate Java Developer with over X years of experience in building scalable web applications and solving complex problems. I specialize in Java Spring Boot, RESTful APIs, and have a strong foundation in cloud technologies like AWS. I enjoy tackling new challenges and continuously improving my skills. Currently, I am looking for opportunities to contribute to innovative projects and grow my expertise in software development.
                    </p>
                    <br />
                    <div className="icons-container flex space-x-5">
                        <a
                            href="https://www.linkedin.com/in/khushboo-bharti-386332200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-blue-500 border cursor-pointer w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
                        >
                            <i className="fa-brands fa-linkedin text-white text-2xl"></i>
                        </a>
                        <a
                            href="https://github.com/Khushii7408prog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-blue-500 border cursor-pointer w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
                        >
                            <i className="fa-brands fa-github text-white text-2xl"></i>
                        </a>
                        <a
                            href="https://www.hackerrank.com/khushboobharti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-blue-500 border cursor-pointer w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
                        >
                            <i className="fa-brands fa-hackerrank text-white text-2xl"></i>
                        </a>
                    </div>
                    <a
                        href="/contact"
                        className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            <div className='border w-full flex justify-center'>
                {/* Image Section */}
                <img src={bannerImage} alt="Khushboo Bharti" className="rounded-full shadow-lg w-1/3 mt-10" />
            </div>
        </div>
    );
};

export default Banner;
