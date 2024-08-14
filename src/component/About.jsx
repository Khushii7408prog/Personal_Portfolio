import React, { useState } from 'react';
import bannerImage from '../assets/Khushboo.jpg'; // Ensure this path is correct

const About = () => {
    const [data] = useState({
        image: bannerImage,
        title: "Java Developer and Backend Developer",
        desc1: 'Hello! I am Khushboo Bharti, a passionate Java Developer with a strong background in building scalable web applications using Java Spring Boot and other technologies. I enjoy tackling complex challenges and continuously improving my skills. Currently, I am seeking opportunities to contribute to innovative projects and further grow my expertise in software development.',
        desc2: `In my career, I have successfully led and contributed to various high-impact projects, such as [Project Name], which enhanced [specific result or improvement]. I am skilled in Java, Spring Boot, REST APIs, and cloud technologies like AWS. With a degree in Computer Science from [University Name], I am passionate about leveraging my skills to build innovative solutions and drive technological advancement.

        I am always eager to take on new challenges and continuously improve my expertise. I am looking for opportunities where I can contribute to cutting-edge projects and grow both personally and professionally. I value collaboration and am committed to learning and sharing knowledge with others in the tech community. 
        
        Feel free to connect with me on LinkedIn or reach out via email at [email address] for potential collaborations or career opportunities.`,
        
        actionButton: {
            title: "Read More",
            link: "/Read_More",
        },
    });

    return (
        <>
            <div className="main-container border py-16">
                <h1 className="text-center text-4xl underline font-bold mb-8">About Me</h1>
            
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    {/* Image */}
                    <div className='w-full md:w-1/3 flex justify-center mb-8 md:mb-0'>
                        <img 
                            src={data.image} 
                            alt="Khushboo Bharti" 
                            className="w-3/4 h-auto rounded-lg shadow-lg" // Adjust width here
                        />
                    </div>

                    {/* Text Container */} 
                    <div className='w-full md:w-2/3 border p-8'>
                        <div className='space-y-5'>
                            <h1 className='text-4xl font-semibold'>
                                {data.title}
                            </h1>
                                
                            <p>
                                {data.desc1}     
                            </p>
                            <p>
                                {data.desc2}     
                            </p>

                            <a 
                                href={data.actionButton.link} 
                                className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
                            >
                                {data.actionButton.title}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
