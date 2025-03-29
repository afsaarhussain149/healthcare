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
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg2OC1zYXNpLTA2LmpwZw.jpg" alt="Doctor" className="w-full md:w-[80%] h-auto object-cover rounded-lg" />
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
                      src="data:image/jpeg;base64,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"
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
                src="https://thumbs.dreamstime.com/z/book-your-medical-appointment-online-using-mobile-app-doctor-sitting-desk-background-wearing-face-mask-190595834.jpg" 
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
