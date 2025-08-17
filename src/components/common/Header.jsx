import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Header = () => {

    const navItems = [
        { label: "HOME", link: "#hero" },
        { label: "ABOUT", link: "#about" },
        { label: "CONTACT", link: "#contact" },
        { label: "PROJECTS", link: "#projects" },
        { label: "SKILLS", link: "#skills" }
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='fixed top-0 left-0 right-0 z-50'>


            <div className='block md:hidden'>
                <div className='flex justify-between px-6 py-2 bg-white'>
                    <h1 className='text-xl font-bold'>PORTFOLIO </h1>

                    {
                        isMenuOpen ? <IoClose size={25} onClick={() => setIsMenuOpen(!isMenuOpen)} /> : <IoMenu size={25} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    }

                </div>
                {
                    isMenuOpen && <ul className='flex flex-col items-center w-full justify-center absolute bg-white gap-3 py-3 shadow-2xl'>
                        {
                            navItems.map((data) => <li className='hover:bg-[#0B666A] hover:cursor-pointer w-full text-center font-bold'><a onClick={() => setIsMenuOpen(!isMenuOpen)} href={data.link}>{data.label}</a></li>)
                        }
                    </ul>
                }
            </div>


            <div className='hidden sm:hidden md:block'>

                <div className='flex px-6 py-2  items-center justify-between w-full shadow-2xl bg-white z-50'>
                    <h1 className='text-xl font-bold text-black  z-50 w-1/2'>PORTFOLIO </h1>
                     <ul className='flex justify-center gap-3 py-3  w-1/2'>
                    {
                        navItems.map((data) => <li className='hover:bg-[#0B666A] hover:cursor-pointer w-full text-center font-bold'><a href={data.link}>{data.label}</a></li>)
                    }
                </ul>
                </div>

               

            </div>
        </div>
    )
}

export default Header