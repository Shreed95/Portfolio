import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
export default function NavBar(props) {
    return (
        <div className="text-white">
            <div className='bg-[#1A120B] h-auto pb-14'>
                <h1 className="text-4xl ave text-center py-24">Contact Box</h1>
                <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#3C2A21] rounded-lg">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold font-mono text-white">Lets talk about everything!</h2>
                        <div>
                            <ul className='flex justify-start py-16'>
                                <li className='pr-12'><a href="https://www.linkedin.com/in/shreed-raskar-646b20254" target='_blank'><div className='text-3xl hover:text-[#1A120B]'><BsLinkedin></BsLinkedin></div></a></li>
                                <li className='pr-12'><a href="https://www.instagram.com/shreed_95/" target='_blank'><div className='text-3xl hover:text-[#1A120B]'><BsInstagram></BsInstagram></div></a></li>
                                <li><a href="https://www.facebook.com/" target='_blank'><div className='text-3xl hover:text-[#1A120B]'><BiLogoGmail></BiLogoGmail></div></a></li>
                            </ul>
                        </div>
                    </div>
                    <form className="" onSubmit={props.handleSubmit}>
                        <div>
                            <span className="text-sm text-white font-bold">FULL NAME</span>
                            <input className="w-full text-[#1A120B] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" name='name' required="true" onChange={props.handleForm} placeholder="Enter your Name" />
                        </div>
                        <div className="mt-8">
                            <span className="text-sm text-white font-bold">EMAIL</span>
                            <input className="w-full text-[#1A120B] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" name='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={props.handleForm} required="true" placeholder='Enter your Email' />
                        </div>
                        <div className="mt-8">
                            <span className="text-sm text-white font-bold">MESSAGE</span>
                            <textarea
                                className="w-full h-32 text-[#1A120B] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name='message' required="true" onChange={props.handleForm} placeholder='Enter your Message'></textarea>
                        </div>
                        <div className="mt-8">
                            <button
                                className="text-sm font-bold text-[#1A120B] bg-[#D5CEA3] btn-design p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" type='submit'>
                                SEND MESSAGE
                            </button>
                        </div>
                        <p className='text-green-300 text-xl pt-8'>{props.msg}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}