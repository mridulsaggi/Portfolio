import React, { useState } from 'react'
import { navLinks } from '../constants/index.js'
const Navitem=()=>{
    return(
        <ul className='nav-ul'>
        {navLinks.map((e,idx)=>(
                <li key={idx} className='nav-li'><a href={e.href}>{e.name}</a></li>
            )) }
        </ul> 
    )
}
const Navbar = () => {
    const [toggle, settoggle] = useState(false)
    const togglehandler = () => {
        settoggle(!toggle)
    }
    return (
        <header className='text-2xl fixed top-0 left-0 right-0 z-15 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className="flex justify-between items-center c-space mx-auto">
                    <a href='/' className='font-bold text-neutral-400 my-2 text-xl hover:text-white'>Mridul | Portfolio </a>
                    <button onClick={togglehandler} className='sm:hidden flex items-center justify-center flex-col'>
                        <img src={toggle?"assets/close.svg":"assets/menu.svg"} alt="toggle" className='h-6 w-6' />
                    </button>
                    <nav className='sm:flex hidden text-white-800 items-center justify-center'>
                        <Navitem/>
                    </nav>                    
                </div>
            </div>
            <div className={`nav-sidebar ${toggle?'max-h-screen':'max-h-0'}`}>
                <nav>
                    <Navitem/>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
