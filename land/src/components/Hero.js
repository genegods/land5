import React from "react";
import heroImage from '../asserts/img1.png'

const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div className="w-full h-screen px-10 mt-10 grid grid-rows-2 gap-10 md:mt-0 md:grid-cols-2 md:w-4/5 md:mx-auto">
          <div className="w-full h-full font-bold md:mt-20">
            <p className="text-2xl md:text-4xl">It's not just coffee</p>
            <p className="text-2xl md:text-4xl">
              It's
              <span className="text-5xl pl-2 font-bold text-green-900 md:text-8xl">
                starbucks
              </span>
            </p>

            <p className="md:text-xl">
              lorem ipsum dolor sit amet nib lorem lorem ipsum dolor sit amet
              nib lorem lorem ipsum dolor sit amet nib lorem lorem ipsum dolor
              sit amet nib lorem lorem ipsum dolor sit amet nib lorem lorem
              ipsum dolor sit amet nib lorem lorem ipsum dolor sit amet nib
              lorem
            </p>
            <button className="bg-green-900 text-white font-bold py-1 px-2 rounded mt-2 capitalize md:py-2 md:px-4 md:text-2xl ">
              learn more
            </button>
          </div>
          <div className="w-full z-10">
            <div className="w-full centered">
              <img
                src={heroImage}
                alt="heroImage"
                className="w-full  md:w-96 -mt-28 md:mt-10"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
