import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { BrowserRouter as Router, Route, Routes, Link, href } from "react-router-dom";

const memuBar = [
  {menu:'Home', href: ""},
  {menu:'About', href: ""},
  {menu:'Doctors', href: ""},
  {menu:'Home', href: ""},
  {menu:'Contact', href: ""},
];

const Header = () => {
  const[openNav, setNave ] = useState(true);
  return (
    <>
      <header className='container-fluid p-2 shadow'>
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
              <a href='' className='text-decoration-none'><li className='p-3 bg-warning rounded text-white fw-bold'>Make an appointment</li></a>
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
        <li className="hidden max-[992px]:block fixed bottom-4 left-1/2 -translate-x-1/2 bg-warning rounded text-white font-bold p-3 w-11/12 text-center shadow-lg">
          Make an appointment
        </li>
      </a>

    </>
  )
}

export default Header