"use client";
import React from 'react';
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Link from 'next/link';

const NavLinks=[
    {name:'Acceuil', link:'#hero'},
    {name:'Diarra', link:'#about'},
    {name: 'SAE', link:'#sae'},
    {name : "stage", link:'#stage'},
    {name:'Skills', link:'#skills'},
    {name:'Experience', link:'#experience'},
    {name:'Projets', link:'#projects'},
    {name:'Contact', link:'#contact'}
]

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }   

    const closeNav = () => {
        setNav(false)
    }

  return (
    <div className='z-50 fixed flex justify-center w-full text-white font-bold'>

        <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl
                        hidden md:flex items-center justify-between p-2 max-w-[750px] mx-auto">
            <ul className='flex flex-row p-2 space-x-8'>
                {NavLinks.map((link, index) => (
                    <li key={index} className='transform hover:texte-white/50 transition-all duration-300 ease-in-out'>
                        <Link href={link.link} className='transform hover:text-white/40 transition-all duration-300 ease-in-out'>
                        {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <div onClick={toggleNav} className='md:hidden absolute top-5 right-14 border rounded
                                                z-50 texte-white/70 border-white /70 p-2'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className={`fixed left-0 top-0 w-full bg-black/90 transform transition-transform duration-300
                    ${nav ? 'translate-x-0' : '-translate-x-full'} md:hidden h-screen z-50'}`}>
            <ul className='flex flex-col items-center justify-center space-y-8 h-full'>
                {NavLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.link} onClick={closeNav} className='text-2xl'>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default NavBar