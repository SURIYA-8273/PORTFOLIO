import React from 'react'

const ProjectSection = () => {

const projects = [
  {
    title: "E-Commerce App (MERN)",
    image: "/poster.jpeg",
    description:
      "A full-stack e-commerce platform with product listing, cart, payment gateway, and admin panel using MERN stack.",
    github: "https://github.com/SURIYA-8273/ECOMMERCE-MERN.git",
    live: "https://ecommerce-demo.vercel.app",
    view: "/projects/ecommerce", // internal route or modal link
  },
  {
    title: "Event Management System",
    image: "/poster.jpeg",
    description:
      "A system for users to browse and book events, and for organizers to create and manage them using Flutter and Node.js.",
    github: "https://github.com/Event-Organizer-Event-Sphere",
    live: "https://event-demo.vercel.app",
    view: "/projects/event-management",
  },
  {
    title: "Portfolio Website",
    image: "/poster.jpeg",
    description:
      "Personal portfolio website to showcase projects, skills, and resume using React and Tailwind CSS.",
    github: "https://github.com/SURIYA-8273/PORTFOLIO.git",
    live: "https://yourportfolio.vercel.app",
    view: "/projects/portfolio",
  },
  {
    title: "Furniture Store Website",
    image: "/poster.jpeg",
    description:
      "Responsive furniture shop website with search, filters, and order management using Next.js and MySQL.",
    github: "https://github.com/SURIYA-8273/FURNITURE_STORE_CLIENT.git",
    live: "https://furniture-demo.vercel.app",
    view: "/projects/furniture-store",
  },
  {
    title: "Job Finder App (Flutter + Node.js)",
    image: "/jobfinder.jpeg",
    description:
      "A cross-platform mobile application built with Flutter for job seekers and recruiters. Backend powered by Node.js with authentication, job posting, real-time updates, and chat between recruiters and applicants.",
    github: "https://github.com/SURIYA-8273/JOB_FINDER.git",
    live: "https://jobfinder-demo.vercel.app",
    view: "/projects/job-finder",
  },
];


    return (
        <div id='projects' className='flex flex-col justify-center items-center'>

            <h1 className='text-center text-3xl mt-[40px] font-bold mb-8'>PROJECTS</h1>


            <div className='flex flex-wrap gap-x-4 gap-y-4 justify-center'>
                {
                    projects.map((project) =>
                        <div className='shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-xl w-[170px]  hover:border-amber-300 hover:border-2 pb-3'>
                            {/* <img className='rounded-tl-xl rounded-tr-xl' src={project.image} alt="" height={80} width={200} /> */}
                            <div className='px-2'>
                                <p className='text-center mt-1 font-bold text-[12px] md:text-[15px] line-clamp-1'>{project.title}</p>
                                <p className='text-[13px] line-clamp-4 text-center md:text-[15px]  '>{project.description}</p>
                                <div className='flex justify-around px-1 mt-2 items-center'>
                                    {/* <div className='border-[1px] cursor-pointer rounded-2xl hover:bg-black hover:text-white px-2 py-1 text-[10px] font-bold flex hover:border-1'>
                                        <p>LIVE</p>
                                    </div> */}
                                   <a href={project.github}> <div className='border-[1px] cursor-pointer hover:bg-black hover:text-white rounded-2xl px-2 py-1 text-[10px] font-bold flex'>
                                        <p>GITHUB</p>
                                    </div></a>
                                    {/* <div className='border-[1px] cursor-pointer hover:bg-black hover:text-white rounded-2xl px-2 py-1 text-[10px] font-bold flex'>
                                        <p>VIEW</p>
                                    </div> */}
                                    
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