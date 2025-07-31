import React from 'react'

const SkillSection = () => {

    const skills = [
        {
            image: "/public/java.svg"
            , title: "JAVA"
        },
        {
            image: "/public/python.svg"
            , title: "PYTHON"
        },
        {
            image: "/public/html5.svg"
            , title: "HTML"
        },
        {
            image: "/public/css.svg"
            , title: "CSS"
        }, {
            image: "/public/tailwindcss.svg"
            , title: "TAILWIND"
        },  {
            image: "/public/react.svg"
            , title: "REACT JS"
        }, {
            image: "/public/nextdotjs.svg"
            , title: "NEXT JS"
        }, {
            image: "/public/nodedotjs.svg"
            , title: "NODE JS"
        }, {
            image: "/public/express.svg"
            , title: "EXPRESS"
        }, {
            image: "/public/mongodb.svg"
            , title: "MONGO DB"
        }, {
            image: "/public/mysql.svg"
            , title: "MYSQL"
        }, {
            image: "/public/firebase.svg"
            , title: "FIREBASE"
        }, {
            image: "/public/dart.svg"
            , title: "DART"
        }, {
            image: "/public/flutter.svg"
            , title: "FLUTTER"
        }, {
            image: "/public/spring.svg"
            , title: "SPRING BOOT"
        },
        {
            image: "/public/javascript.svg"
            , title: "JAVA SCRIPT"
        }, {
            image: "/public/typescript.svg"
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