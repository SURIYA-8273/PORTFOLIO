
const ContactSection = () => {



    return (
        <div id='contact' className='flex flex-col justify-center items-center'>

            <h1 className='text-center text-3xl mt-[40px] font-bold mb-7'>CONTACT</h1>

            <form action="" className="shadow-[0_0_20px_rgba(0,0,0,0.02)] p-4 w-[300px]">
                <div className="flex flex-col">
                    <label htmlFor="">Name</label>
                    <input type="text" className="border-1 border-gray-700 placeholder:text-[12px] px-2 py-1 rounded-sm" placeholder="Recruiter" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input type="text" className="border-1 border-gray-700 placeholder:text-[12px] px-2 py-1 rounded-sm" placeholder="recruiter@gmail.com" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Message</label>
                    <textarea rows={3} type="text" className="border-1 border-gray-700 placeholder:text-[12px] px-2 py-1 rounded-sm" placeholder="Hi , I am ..." />
                </div>
                <div className='border-[1px] cursor-pointer  bg-black text-white hover:border-amber-300 rounded-sm px-2 py-1 text-[13px] font-bold mt-3  w-[150px] m-auto'>
                    <p className="text-center">SEND</p>
                </div>
            </form>

        </div>
    )
}

export default ContactSection