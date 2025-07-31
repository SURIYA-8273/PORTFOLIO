import React from 'react'

const ProjectSection = () => {

    const projects= [
  {
    title: "E-Commerce App (MERN)",
    image: "/poster.jpeg",
    description: "A full-stack e-commerce platform with product listing, cart, payment gateway, and admin panel using MERN stack.",
  },
  {
    title: "Event Management System",
    image: "/poster.jpeg",
    description: "A system for users to browse and book events, and for organizers to create and manage them using Flutter and Node.js.",
  },
  {
    title: "Real-time Chat App",
    image: "/poster.jpeg",
    description: "Chat application with user authentication, real-time messaging, and room-based chats built with React and Socket.io.",
  },
  {
    title: "Portfolio Website",
    image: "/poster.jpeg",
    description: "Personal portfolio website to showcase projects, skills, and resume using React and Tailwind CSS.",
  },
  {
    title: "Online Quiz App",
    image: "/poster.jpeg",
    description: "Flutter-based quiz application with multiple-choice questions, timer, scoring, and result tracking.",
  },
  {
    title: "Weather Forecast App",
    image: "/poster.jpeg",
    description: "Weather app using OpenWeather API and React.js to provide current conditions and 5-day forecasts.",
  },
  {
    title: "Admin Dashboard",
    image: "/poster.jpeg",
    description: "Dashboard with analytics, charts, user management, and role-based authentication built using React and Node.js.",
  },
  {
    title: "Blog CMS",
    image: "/poster.jpeg",
    description: "Content Management System for creating, editing, and deleting blog posts using MongoDB, Express, and EJS.",
  },
  {
    title: "Furniture Store Website",
    image: "/poster.jpeg",
    description: "Responsive furniture shop website with search, filters, and order management using Next.js and MySQL.",
  },
  {
    title: "To-Do App with Firebase",
    image: "/poster.jpeg",
    description: "Task management app with authentication, deadline reminders, and real-time sync using Firebase and React.",
  },
];

    return (
        <div id='projects' className='flex flex-col justify-center items-center'>

            <h1 className='text-center text-3xl mt-[40px] font-bold mb-8'>PROJECTS</h1>


            <div className='flex flex-wrap gap-x-4 gap-y-4 justify-center'>
                {
                    projects.map((project) =>
                        <div className='shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-xl w-[170px] h-[240px] hover:border-amber-300 hover:border-2'>
                            <img className='rounded-tl-xl rounded-tr-xl' src={project.image} alt="" height={80} width={200} />
                            <div className='px-2'>
                                <p className='text-center mt-1 font-bold text-[12px] line-clamp-1'>{project.title}</p>
                                <p className='text-[13px] line-clamp-4 text-center  '>{project.description}</p>
                                <div className='flex justify-around px-1 mt-2 items-center'>
                                    <div className='border-[1px] cursor-pointer rounded-2xl hover:bg-black hover:text-white px-2 py-1 text-[10px] font-bold flex hover:border-1'>
                                        <p>LIVE</p>
                                    </div>
                                    <div className='border-[1px] cursor-pointer hover:bg-black hover:text-white rounded-2xl px-2 py-1 text-[10px] font-bold flex'>
                                        <p>GITHUB</p>
                                    </div>
                                    <div className='border-[1px] cursor-pointer hover:bg-black hover:text-white rounded-2xl px-2 py-1 text-[10px] font-bold flex'>
                                        <p>VIEW</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default ProjectSection