import React from 'react';
import locationGIF from "../../Assets/Gif/location.gif";
import emailGIF from "../../Assets/Gif/email.gif";
import './contact.css'; 



const ContactSection = () => {
  return (
    <section className="relative bg-[#1B1B1B] text-white font-sans ">
      
      <div
      
        className="  bg_image   flex flex-wrap justify-center items-center  h-[350px] "
      >
      </div>
      
        <div className=" absolute -top-[15rem] flex flex-col gap-10 justify-center items-center text-white bg-transparent   shadow-md  min-h-full w-full">
          <h1 className="text-5xl font-bold mb-5 opacity-100">Contact Us  </h1>
          
        </div>
      
   <div className="bg-[#1B1B1B] text-white py-16 px-4 md:px-20 w-full mx-0">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div>
          <h4 className="text-orange-400 text-sm font-semibold mb-2">Contact With Us</h4>
          <h2 className="text-3xl md:text-3xl font-bold mb-6">Have Questions Get In Touch!</h2>
          <p className="text-gray-300 mb-8">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
          </p>

         
          <div className="space-x-6 flex sm:flex-row justify-center items-center flex-col sm:items-start">
            <div className="flex items-start gap-4 ">
              <div className="bg-neutral-900 p-3 rounded-full">
                <span className="text-orange-500 text-sm ">
                  <img src={locationGIF} width="40px" alt="gif"  />
                </span>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-300">7515 Carriage Court, Coachella, CA, 922</p>
              </div>
            </div>
            <div className="flex  items-start gap-4">
              <div className="bg-neutral-900 p-3 rounded-full">
                <span className="text-orange-500 text-sm ">
                  <img src={emailGIF} width="70px" alt="gif"  />

                </span>
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-300">gdghdybhab@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/*  Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-neutral-900 p-3 rounded text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-neutral-900 p-3 rounded text-white placeholder-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Number"
              className="bg-neutral-900 p-3 rounded text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-neutral-900 p-3 rounded text-white placeholder-gray-400"
            />
          </div>
          <input
            type="text"
            placeholder="Your Company Name"
            className="w-full bg-neutral-900 p-3 rounded text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Write your question here"
            className="w-full bg-neutral-900 p-3 h-40 rounded text-white placeholder-gray-400 resize-none"
          />
          <button
            type="submit"
            className="bg-black border border-orange-400 px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

</div>
      <div>
      <h1>Google Map i frame</h1>
      </div>

    </section>
  );
};

export default ContactSection;
