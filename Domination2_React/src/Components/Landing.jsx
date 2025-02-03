import { motion } from "framer-motion";
import React from "react";
import { Power4 } from "gsap";
import { stagger } from "framer-motion/dom";

function Landing() {
  return (
    <div className="relative w-full h-[200vh] sm:h-[350vh]">
      <div className="w-full h-full picture overflow-hidden">
        <img data-scroll data-scroll-speed="-1" 
          className="w-full h-full"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt="not working"
        ></img>
      </div>
      <div className="w-full absolute top-0">
        <div className="h-full text max-w-screen-2xl mx-auto px-5 sm:px-10 text-white">
          <div className="para mt-72 sm:mt-[35rem]">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              " exceptional experiences where people",
              "live,work, and unwind",
            ].map((item, index) => {
              return (
                <p key={index} className="text-md masker  sm:text-3xl overflow-hidden ">
                  <motion.span
                    initial={{ rotate: 90, y: "100", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    // transition={{ ease: Power4.easeInOut, duration: 2 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 2,
                      delay: index * 0.2,
                    }}
                    className="inline-block origin-left "
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}

            {/* <p className="text-md  sm:text-3xl  ">
              with brands and businesses that create
            </p>
            <p className="text-md  sm:text-3xl  ">
              exceptional experiences where people
            </p>
            <p className="text-md  sm:text-3xl  ">live,work, and unwind</p> */}
          </div>
          <div className="headings mt-5 sm:mt-10">
            {["Digital", "Design", "Experience"].map((item, index) => {
              return  <h1 key={index}
                
                  className="text-6xl sm:text-[18rem] font-light py-4 -mt-10 tracking-tighter leading-none"
                >
                  <motion.span
                initial={{ rotate: 90, y: "100", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 2,
                  delay:1+index*.11
                }}
                className="inline-block origin-left "
              >
                
                  {item}
              </motion.span>
                </h1>
              
            })}
            {/* <h1 className="text-6xl sm:text-[18rem] font-light tracking-tighter overflow-hidden leading-none">
              <motion.span
                initial={{ rotate: 90, y: "100", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 2,
                  
                }}
                className="inline-block origin-left "
              >
                
              </motion.span>
            </h1> */}
            {/* <h1 className="text-6xl sm:text-[18rem] font-light tracking-tighter leading-none">
              Design
            </h1>
            <h1 className="text-6xl sm:text-[18rem] font-light tracking-tighter leading-none">
              Experience
            </h1>  */}
          </div>
          <div className="para2 mt-10 sm:w-1/3 sm:mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making teir audience
              feel the refined intricacies of their brand and product in the
              didital space.Unforgettable journeys start with a click
            </p>
            <a
              className="sm:text-xl sm:border-b-[1px] border-b-[.3px] border-zinc-100 pb-1 mt-10 inline-block"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
