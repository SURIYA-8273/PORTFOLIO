import React from 'react'

const AboutSection = () => {

    const keyColor = "text-blue-400"
    const valueColor = "text-[#c87d7d]"


    return (
        <div id='about' className='flex flex-col justify-center items-center'>

            <h1 className='text-center text-3xl mt-[40px] font-bold mb-7'>ABOUT</h1>

            <div>
                <pre className='bg-[#340732] px-2 py-4 rounded-bl-2xl rounded-tr-2xl'>

                    <p className='font-semibold'>
                        <span className='text-blue-600'>const</span> <span className='text-pink-600'>myDetails</span><span className='text-white'>{" = {"}</span>{"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={keyColor}>name:</span> <span className={valueColor}>"Suriya",</span> {"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={keyColor}>qualification:</span> <span className={valueColor}>"B.E. CSE",</span> {"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={keyColor}>university:</span> <span className={valueColor}>"Anna University",</span> {"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={keyColor}>graduationYear:</span> <span className={valueColor}>"2025",</span> {"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={keyColor}>location:</span> <span className={valueColor}>"Pudukkottai, Tamil Nadu"</span> {"\n"}
                        <span className='text-white'>{"}\n"}</span>
                    </p>
                </pre>

            </div>

        </div>
    )
}

export default AboutSection