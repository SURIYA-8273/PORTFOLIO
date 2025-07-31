import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub color="black" size={24} />,
            url: "https://github.com/your-username"
        },
   
        {
            name: "LinkedIn",
            icon: <FaLinkedin color="blue" size={24} />,
            url: "https://linkedin.com/in/your-username"
        },
        {
            name: "WhatsApp",
            icon: <FaSquareWhatsapp color="green" size={24} />,
            url: "https://wa.me/yourphonenumber"
        },
        {
            name: "Phone",
            icon: <FaPhoneSquareAlt color="#000" size={24} />,
            url: "tel:+911234567890"
        }
    ];
    const navItems = [
        { label: "HERO", link: "#hero" },
        { label: "ABOUT", link: "#about" },
        { label: "CONTACT", link: "#contact" },
        { label: "PROJECTS", link: "#projects" },
        { label: "SKILLS", link: "#skills" }
    ];
    return (
        <div id='contact' className='flex flex-col py-3'>
            <div className='flex justify-around'>

                <div className='flex gap-2 mt-2'>
                    {
                        navItems.map((data) => <div>
                            <p className='text-[10px]'>{data.label}</p>
                        </div>)
                    }
                </div>
                <div className='flex gap-1'>
                    {
                        socialLinks.map((data) => <div>
                            <a href="">{data.icon}</a>
                        </div>)
                    }
                </div>
            </div>


            <div className='flex justify-center mt-2'>
                <FaRegCopyright className='mt-0' /> 
            <p className='pl-1 text-[12px]'>2025 SURIYA</p>
            </div>
        </div>
    )
}

export default Footer