const Expertise = () => {
   return (
       <>
           <div className="py-14 bg-gray-50">
               <h1 className="text-5xl font-bold underline text-center mb-12">
                   My Expertise
               </h1>

               {/* Expertise Section */}
               <div className="container mx-auto px-8">
                   {/* Text container */}
                   <div className="text-center mb-8">
                       <h2 className="text-3xl font-semibold mb-4">I Love These Technologies</h2>
                       <p className="text-lg text-gray-600 mb-6">
                           Here are some of the key technologies and frameworks that I specialize in:
                       </p>
                       <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition-colors duration-300">
                           Hire Me
                       </button>
                   </div>

                   {/* Skills Section */}
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                       <div className="bg-white p-6 rounded-lg shadow-lg">
                           <p className="text-xl font-medium">Core Java</p>
                       </div>
                       <div className="bg-white p-6 rounded-lg shadow-lg">
                           <p className="text-xl font-medium">J2EE</p>
                       </div>
                       <div className="bg-white p-6 rounded-lg shadow-lg">
                           <p className="text-xl font-medium">Hibernate (ORM Tool)</p>
                       </div>
                       <div className="bg-white p-6 rounded-lg shadow-lg">
                           <p className="text-xl font-medium">JavaScript</p>
                       </div>
                       <div className="bg-white p-6 rounded-lg shadow-lg">
                           <p className="text-xl font-medium">Spring Boot Framework</p>
                       </div>
                       <div className="bg-white p-6 rounded-lg shadow-lg">
                           <p className="text-xl font-medium">MySQL</p>
                       </div>
                       <div className="bg-white p-6 rounded-lg shadow-lg">
                           <p className="text-xl font-medium">SQL Server</p>
                       </div>
                       <div className="bg-white p-6 rounded-lg shadow-lg">
                           <p className="text-xl font-medium">HTML/CSS</p>
                       </div>
                   </div>
               </div>
           </div>
       </>
   );
};

export default Expertise;
