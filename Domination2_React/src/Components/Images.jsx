import React, { useEffect, useRef } from 'react'
import { Power4 } from "gsap";
import gsap,{ScrollTrigger} from "gsap/all";


function Images() {
const first  = useRef(null)
const third  = useRef(null)
const parent = useRef(null)

useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger: parent.current,
      start:"0 90%",
      scrub:1
    }
  },'a')
  tl.to(first.current,{
    x: "40%",
    ease:Power4
  })
  tl.to(third.current,{
    x: "-40%",
    ease:Power4
  },'a')
})
  return (
    <div ref={parent} className='w-full h-[70vh] sm:h-[100vh] bg-red-600 bg-white flex items-center justify-center overflow-hidden'>
        <div className='w-[40%] sm:w-[20%] sm:h-[70%] h-1/2 relative'>
        <div ref={first} className='absolute w-20  h-[7rem] sm:w-40 sm:h-[15rem] -right-1/3 top-6 '>
            <img className="w-full h-full object-cover" src='https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)'/>
        </div>
        <div className='absolute w-[8rem] sm:w-[15rem] sm:-left-2/3 aspect-video -left-1/2 top-1/3 overflow-hidden'>
        <video autoPlay loop muted className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>
        <div ref={third} className='absolute w-[6rem] sm:w-[12rem] aspect-video -left-[50%] bg-red-600 -bottom-10'>
            <img className='w-full h-full object-cover' src='https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)'/>
        </div>
        <div className='absolute w-[10rem] sm:w-[11rem] aspect-[1.4/1] -right-[70%] -bottom-[37%] sm:-bottom-[20%] sm:-right-[30%] overflow-hidden '>
        <video autoPlay loop muted className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4'></video>
        </div>
        <img className='w-full h-full object-cover' src='https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)' />
        </div>
    </div>
  )
}

export default Images