import React from 'react'

const Home = () => {
  return (
    <>
      <div className='container-{xl}'>
        <section class="w-full h-auto sm:h-[400px] md:h-[600px] lg:h-[750px] overflow-hidden rounded-lg">
          <img src="https://static.vecteezy.com/system/resources/previews/037/744/927/non_2x/blue-healthcare-and-medical-science-background-free-free-vector.jpg" 
              class="w-full h-auto sm:h-full md:h-full lg:h-full object-cover object-center" />
        </section>

        <section className="bg-[#f5f5f5] py-10">
          <section className="container grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-[500px] md:h-[500px] px-4">
            <article className="text-center md:text-left">
              <h1 className="pt-10 md:pt-20 pb-5 md:pb-10 text-3xl md:text-5xl">
                Welcome to Your <strong className="text-5xl">Ⓗ</strong>ealth<br /> Center
              </h1>
              <p className="text-[#757575]">
                Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.
              </p>
              <p className="text-[#757575]">
                Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.
              </p>

              <h1 className="text-[28px] md:text-[35px] mt-5 mb-0"> 
                Dr. Nirmal 
              </h1>
              <p className="text-[#757575]">General Principal</p>
            </article>

            <div className="flex justify-center items-center">
              <img src="\src\assets\images\Demo1.webp" alt="Doctor" className="w-full md:w-[80%] h-auto object-cover rounded-lg" />
            </div>
          </section>
        </section>

        <section className="">
          <section className="container mx-auto w-full h-auto p-4">
          <h1 className="pt-10 pb-6 text-3xl font-bold pb-20">Our Doctors</h1>
            <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg w-full object-cover"
                      src="./src/assets/images/profile1.avif"
                      alt="Doctor"
                    />
                  </a>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Dr. Nirmal
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Experienced specialist in healthcare, providing the best
                      treatment and consultations.
                    </p>
                  </div>
                </div>
              ))}
            </article>
          </section>
        </section>

        <section className="py-10">
          <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-h-[500px] md:h-[500px] px-4">

            <div className="flex justify-center items-center">
              <img 
                src="\src\assets\images\appointment.jpg" 
                alt="Appointment" 
                className="w-full max-w-md md:max-w-lg"
              />
            </div>

            <article className="text-center md:text-left flex flex-col justify-center">
              <form className="space-y-4 bg-white p-6 rounded-lg">
                <h1 className="text-5xl text-start pb-10">Make an Appointment</h1>

                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input 
                  type="number" 
                  placeholder="Phone No." 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea 
                  placeholder="Message" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>

                <button 
                  className="w-full bg-[#52AFB5] text-white p-3 rounded-md hover:bg-blue-600 transition">
                  Submit
                </button>
              </form>
            </article>
            
          </section>
        </section>

        <section className='container pb-5'>
        <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.7884589309301!2d77.33829732079614!3d28.511848928814903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7a98be7a023%3A0x4c94e3df0dcdfadd!2sBharat%20Transport!5e0!3m2!1sen!2sin!4v1742548098349!5m2!1sen!2sin" 
                className="w-full h-[250px] rounded-lg shadow-lg" 
                loading="lazy"
              ></iframe>
        </section>

      </div>
    </>
  )
}

export default Home
