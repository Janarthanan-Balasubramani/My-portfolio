
import { Bars3Icon  } from '@heroicons/react/24/solid'
import { useState } from 'react'

function Header() {
const [ToggleMenu ,SetToggleMenu] = useState(false);
  return (

 <header className="flex justify-between py-3 px-5 bg-primary">
    <a href="#" className="font-bold text-black">JANARTHANAN</a>
    <nav className="hidden md:block"> 
    <ul className="flex text-white">
    <li><a href="/">HOME</a></li>
    <li><a href="#about">ABOUT</a></li>
    <li><a href="#projects">PROJECTS</a></li>
    <li><a href="#contact">CONTACT</a></li>
    <li></li>
    </ul>
   
    </nav>
   {ToggleMenu && <nav className="block md:hidden"> 
    <ul onClick={()=>SetToggleMenu(!ToggleMenu)} className="flex text-white flex-col  mobile-nav">
    <li  ><a href="#">HOME</a></li>
    <li ><a href="#about">ABOUT</a></li>
    <li ><a href="#projects">PROJECTS</a></li>
    <li ><a href="#contact">CONTACT</a></li>
    </ul>

    </nav>}
    <button className='md:hidden' onClick={()=>SetToggleMenu(!ToggleMenu)}>
    <Bars3Icon className="text-white h-5" />
    </button>
    </header>  )
}

export default Header