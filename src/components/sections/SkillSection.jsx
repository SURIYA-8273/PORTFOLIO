import React from 'react'

const SkillSection = () => {

    const skills = [
        {
            image: "/java.svg"
            , title: "JAVA"
        },
        {
            image: "/python.svg"
            , title: "PYTHON"
        },
        {
            image: "/html5.svg"
            , title: "HTML"
        },
        {
            image: "/css.svg"
            , title: "CSS"
        }, {
            image: "/tailwindcss.svg"
            , title: "TAILWIND"
        },  {
            image: "/react.svg"
            , title: "REACT JS"
        }, {
            image: "/nextdotjs.svg"
            , title: "NEXT JS"
        }, {
            image: "/nodedotjs.svg"
            , title: "NODE JS"
        }, {
            image: "/express.svg"
            , title: "EXPRESS"
        }, {
            image: "/mongodb.svg"
            , title: "MONGO DB"
        }, {
            image: "/mysql.svg"
            , title: "MYSQL"
        }, {
            image: "/firebase.svg"
            , title: "FIREBASE"
        }, {
            image: "/dart.svg"
            , title: "DART"
        }, {
            image: "/flutter.svg"
            , title: "FLUTTER"
        }, {
            image: "/spring.svg"
            , title: "SPRING BOOT"
        },
        {
            image: "/javascript.svg"
            , title: "JAVA SCRIPT"
        }, {
            image: "/typescript.svg"
            , title: "TYPESCRIPT"
        },

    ]


    return (
        <div id='skills' className='flex flex-col justify-center items-center'>

            <h1 className='text-center text-3xl mt-[40px] font-bold mb-8'>SKILLS</h1>

            <div className='flex flex-wrap gap-x-5 gap-y-5 justify-around'>
                {
                    skills.map((skill) =>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='relative bg-white  w-[70px] h-[70px] shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-full hover:border-2 border-amber-300'>
                                <img className='absolute inset-0 m-auto p-4' src={skill.image} alt="" height={80} width={80} />
                            </div>
                            <p className='text-center mt-2 font-bold'>{skill.title}</p>
                        </div>

                    )
                }
            </div>




        </div>
    )
}

export default SkillSection