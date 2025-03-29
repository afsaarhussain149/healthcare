import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className='bg-[#f5f5f5]'>
        <section className="container py-10">
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-h-[500px] md:h-[400px] px-4 relative mb-2">

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h1 className='text-3xl p-5 pb-3'>Contact Info</h1>
                        <p className='ps-5'>D-819 Jaitpur Part-2, Badarpur, New Delhi</p>

                        <div className="flex items-center gap-4 ps-5 pb-3">
                        <div className="bg-black p-2 rounded-full flex items-center justify-center">
                            <FaPhone className="text-white text-lg" />
                        </div>
                        <span className="text-lg font-medium">+123 456 7890</span>
                        </div>

                        <div className="flex items-center gap-4 ps-5">
                        <div className="bg-black p-2 rounded-full flex items-center justify-center">
                            <IoMail className="text-white text-lg" />
                        </div>
                        <span className="text-lg font-medium">healthcare.com</span>
                        </div>
                    </div>
                </div>

                <article>
                <h1 className='text-3xl p-5 pb-3'>Opening Hours</h1>
                <p className='ps-5'>Monday - Friday 10:00 AM - 06:00 PM</p>
                <p className='ps-5'>Saturday - Sunday 10:00 AM - 06:00 PM</p>
                <p className='ps-5'>Tuesday Closed</p>
                </article>
            </section>

            <p className="text-center w-full pt-4 border-t">
            Copyright © 2017 Your Company | Developer: Afsar Hussain
            </p>
        </section>
      </footer>
    </>
  )
}

export default Footer
