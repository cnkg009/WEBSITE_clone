import { motion } from "framer-motion";
import React, { useState } from "react";

function Work() {
  
  const [elems, setElems] = useState([
    {
      heading: "Pixelflakes",
      subheading: "Architecture Marketing Agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Rino & Pelle",
      subheading: "Effortless chic lifestyle",
      vedio:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Aebelle Interiors",
      subheading: "Luxurious design experience",
      vedio:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Pixelflakes",
      subheading: "Architectural Marketing Agency",
      vedio:
        "https://download-video.akamaized.net/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1721725763~exp=1721740163~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=79cd35a5bfd6cf1a7c5bfd773d5633216e5322e1494e9f0b78cf1a5f0ab4226b&r=dXMtY2VudHJhbDE%3D",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-5 py-20 sm:px-10">
        <div className="featured flex gap-3">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>

          <h3 className="capitalize">featured projects</h3>
        </div>
        <h1 className="text-6xl sm:text-[12rem] sm:leading-none sm:tracking-tight overflow-hidden  my-5">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 1 }}
            whileInView={{ rotate: 0, y: 0, opacity: 0 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 2,
            }}
            className="inline-block origin-left "
          >
            Work
          </motion.span>
        </h1>
        <p className="leading-2 text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-5 mt-10">
          {elems.map((item, index) => {
            return (
              <div key={index} className="elem  w-full sm:w-[48%] mt-10 ">
                <div className="video  w-full h-[104vw] sm:h-[50vw] relative overflow-hidden">
                  <motion.img
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    data-scroll
                    data-scroll-speed="-.5"
                    className="hidden sm:z-[2] sm:absolute sm:left-0 sm:top-0 sm:block w-full h-full object-cover"
                    src={item.image}
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block relative z-[1] w-full sclae-[1.3] h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={item.vedio}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">pixelflakes</h3>
                  <h3 className="capitalize opacity-40">
                    Architectural Marketing Agency
                  </h3>
                </div>
              </div>
            );
          })}
          {/* <div className="elem  w-full ">
            <div className="video  w-full h-[104vw] relative overflow-hidden">
              <img
                className="hidden sm:block w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
              />
              <video
                autoPlay
                muted
                loop
                className="block w-full sclae-[1.3] h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="https://download-video.akamaized.net/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1720611403~exp=1720625803~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=0762d6571deee1bb58fa31404294b1a7bf31bdf55941fb57a63e9bd77a7dad63&r=dXMtY2VudHJhbDE%3D"
              ></video>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">pixelflakes</h3>
              <h3 className="capitalize opacity-40">
                Architectural Marketing Agency
              </h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Work;
