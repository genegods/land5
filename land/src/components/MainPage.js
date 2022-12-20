import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";


const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div>
        <div className="h-20 shadow-md">
        <Navbar />
        </div>

        <Hero/>

        <div className="hidden md:block">
        <svg
              className=" w-full h-100vh absolute bottom-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#064e3b"
                fill-opacity="1"
                d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,128C672,128,768,96,864,74.7C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
        </div>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage