import React, { useState } from 'react'

const NavBar = () => {

    const navItems = ["HERO", "ABOUT", "CONTACT", "PROJECTS", "SKILLS"];
    const[isMenuOpen,setIsMenuOpen]=useState(true);
    return (
        <div className=''>

            <div className='flex justify-between px-6 py-2'>
                <h1 className='text-xl font-bold'>SURIYA</h1>
                <p onClick={()=>setIsMenuOpen(!isMenuOpen)}>///</p>
            </div>


           {
            isMenuOpen &&  <ul className='flex flex-col items-center justify-center bg-[#35A29F] gap-3 mt-2 mb-2'>
                {
                    navItems.map((data) => <li className='hover:bg-[#0B666A] hover:cursor-pointer w-full text-center text-[#071952]'>{data}</li>)
                }
            </ul>
           }
        </div>
    )
}

export default NavBar