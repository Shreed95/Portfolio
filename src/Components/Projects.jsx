import React from 'react'
import INX from '../Images/INX.png'
export default function NavBar() {
    return (
        <div className="bg-[#1A120B] h-auto">
            <div className='text-4xl text-white ave text-center py-24'>Projects</div>
            <div className='grid grid-rows-1 md:grid-cols-2 -z-10 text-white place-items-center'>
                <div className="max-w-sm rounded-lg shadow mx-12 my-4 bg-[#3C2A21]">
                    <img className="rounded-t-lg invert p-5 w-full" src={INX} alt="" />
                    <div className="p-5 text-center">
                        <div className="mb-2 text-2xl font-bold text-white">InspireX</div>
                        <p className="mb-3 text-white text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolor soluta saepe fugit reiciendis eos.</p>
                        <button className="px-3 py-2 text-sm text-center text-[#1A120B] btn-design rounded-md bg-[#D5CEA3]">Visit Website</button>
                    </div>
                </div>
                <div className="max-w-sm rounded-lg shadow mx-12 my-4 bg-[#3C2A21]">
                    <img className="rounded-t-lg invert p-5 w-full" src={INX} alt="" />
                    <div className="p-5 text-center">
                        <div className="mb-2 text-2xl font-bold text-white">InspireX</div>
                        <p className="mb-3 text-white text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolor soluta saepe fugit reiciendis eos.</p>
                        <button className="px-3 py-2 text-sm text-center text-[#1A120B] btn-design rounded-md bg-[#D5CEA3]">Visit Website</button>
                    </div>
                </div>
            </div>
        </div>
    );
}