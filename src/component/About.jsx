import React, { useState } from 'react';
import bannerImage from '../assets/Khushboo.jpg'; // Ensure this path is correct

const About = () => {
    const [data] = useState({
        image: bannerImage,
        title: "Java Developer and Backend Developer",
        desc1: 'Hello! I am Khushboo Bharti, a passionate Java Developer with a strong background in building scalable web applications using Java Spring Boot and other technologies. I enjoy tackling complex challenges and continuously improving my skills. Currently, I am seeking opportunities to contribute to innovative projects and further grow my expertise in software development.',
        desc2: `Throughout my career, I have successfully contributed to high-impact projects, including the Chemical & Reagent Inventory and Management System and the Control Panel, where I developed backend functionalities, implemented database interactions, and deployed applications on Tomcat servers. My strong problem-solving skills, coupled with my ability to collaborate effectively with cross-functional teams, have enabled me to deliver robust and efficient solutions.
                I hold a Bachelor of Technology in Computer Science and Engineering from Dr. Ram Manohar Lohia Avadh University, Ayodhya. I am always eager to take on new challenges, learn new technologies, and contribute to innovative projects that drive technological advancement. If you're looking for a dedicated and skilled developer to join your team, feel free to connect with me on LinkedIn or reach out via email at khushboobharti342@gmail.com.

              This introduction highlights your technical skills, work experience, and projects in a concise and professional manner, making it clear to potential employers or collaborators what you bring to the table.`,
        
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
