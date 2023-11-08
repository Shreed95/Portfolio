import React from 'react'
import EIC from '../Images/EIC.jpeg'
import SIH from '../Images/SIH.jpg'
// import Arrow from '../Images/Arrow.png'
export default function NavBar() {
    return (
        <div className='bg-[#1A120B] h-auto'>
            <h1 className="text-4xl text-white ave text-center py-24">Work Experience</h1>
            <div className="text-[#1A120B] timeline relative w-full p-5 md:p-16 after:absolute after:w-2 after:h-full after:top-0 md:after:left-[50%] after:-z-[-1] after:bg-white after:-ml-1">
                <div className="container hidden md:block py-10 px-12 relative w-full md:w-[50%] left-0">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={EIC} alt="logo" className='absolute w-11 rounded-xl -right-[4.25rem] top-8 z-10'/>
                        <h1 className='font-bold text-xl'>Electro Infinity Club</h1>
                        <small>2023-2024</small>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse eaque fugit quo adipisci amet!</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] rightarrow'></span>
                    </div>
                </div>
                <div className="container md:hidden py-10 px-12 relative w-full md:w-[50%] left-0 md:left-[50%]">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={EIC} alt="logo" className='absolute h-12 rounded-md -left-[4.25rem] top-8 z-10' />
                        <h1 className='font-bold text-xl'>Electro Infinity Club</h1>
                        <small>2023-2024</small>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse eaque fugit quo adipisci amet!</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] leftarrow'></span>
                    </div>
                </div>
                <div className="container py-10 px-12 relative w-full md:w-[50%] left-0 md:left-[50%]">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={SIH} alt="logo" className='absolute h-12 rounded-md -left-[4.25rem] top-8 z-10' />
                        <h1 className='font-bold text-xl'>Smart India Hackathon</h1>
                        <small>2023-2024</small>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse eaque fugit quo adipisci amet!</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] leftarrow'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}