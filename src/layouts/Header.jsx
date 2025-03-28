import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const memuBar = [
  {menu:'Home', href: ""},
  {menu:'About Us', href: ""},
  {menu:'Doctors', href: ""},
  {menu:'News', href: ""},
  {menu:'Contact', href: ""},
];

const Header = () => {
  const[openNav, setNave ] = useState(true);
  return (
    <>
      <header className='container-fluid p-2 shadow fixed top-0 z-10 bg-[white  ]'>
        <div className='container d-flex align-items-center justify-content-between'>
            <section>
                <h1>Logo</h1>
            </section>
            
            <nav className='d-flex d-lg-flex list-unstyled gap-3 p-2 d-none'>
            {
              memuBar.map((m, index) =>(
                <a key={index} href='' className='text-decoration-none text-black'>
                  <li className='p-3'>{m.menu}</li>
                </a>
              ))
            }
              <a href='' className='text-decoration-none'><li className='p-3 bg-[#52AFB5] rounded text-white fw-bold'>Make an appointment</li></a>
            </nav>

            <section className="hidden max-[991px]:block text-3xl">
              <button onClick={()=>setNave(!openNav)}>{openNav ?  <FaBars /> : <RxCross2 /> }</button>
            </section>
        </div>

        {
          !openNav ? 
          <section className='list-unstyled text-center hidden max-[991px]:block'>
            {
              memuBar.map((m, index) =>(
                <a key={index} href='' className='text-decoration-none text-black'>
                  <li className='p-3'>{m.menu}</li>
                </a>
              ))
            }
          </section> : ' '
        }
      </header>

      <a href="">
        <li className="hidden max-[992px]:block fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#52AFB5] rounded text-white font-bold p-3 w-11/12 text-center shadow-lg">
          Make an appointment
        </li>
      </a>
    </>
  )
}

export default Header