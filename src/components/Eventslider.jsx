import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ignite from "../assets/Events/ignite.png"
import Escobar2 from "../assets/Events/Escobar2.jpg"
import Escobar from "../assets/Events/Escobar.jpeg"

const slides = [
  {
    image: `${Escobar2}`,
    content: 'Escobar 2.0',
    description : "Introducing Escobar 2.0, our intra-college flagship event where branches collide in a dynamic competition for the startup crown. Students unleash their entrepreneurial prowess, presenting innovative ideas that redefine the future. It's a spirited showcase of creativity, business acumen, and collaboration, culminating in the celebration of the next generation of trailblazing startups."
  },
  {
    image: `${ignite}`,
    content: 'Ignite',
    description : "The annual flagship event of Maharashtra's largest Startup Ideathon is a dynamic platform that brings together aspiring entrepreneurs, industry experts, and investors. Fostering innovation, it provides a forum for ideation, collaboration, and funding opportunities, catalyzing the growth of groundbreaking startups and contributing to the vibrant entrepreneurial ecosystem in the state."
  },
  {
    image: `${Escobar}`,
    content: 'Ecobar Cup',
    description : `Welcome to our intra-college flagship event, where branches ignite the entrepreneurial spirit in a spirited competition for the coveted startup title, "Escobar." Fusing creativity and business acumen, students showcase innovative ideas, vying for recognition and prizes. It's a dynamic arena fostering collaboration and celebrating the entrepreneurial prowess within our academic community.`
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex === slides.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) setCurrentIndex(slides.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  // setInterval(prevSlide,3000);
  return (
    <>
    {/* main container */}
      <div className=' w-full h-[100vh] m-auto py-5 relative  font-sans  bg-[custom-gradient-1] '>

          <div className='flex justify-center text-2xl mb-2 '>
              <h1 className='text-white pb-2 border-b-4'>Events</h1>
          </div>
        
       {/* image div */}
        <div style={{
          background: 'rgba(0,0,0,0.7)',
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'darken'
        }} className={`w-full h-[80vh]  duration-700 ease `}>
        </div>

        {/* left right buttons */}
        <div className='absolute top-[50%]   left-5 text-2xl p-2 bg-black/20  text-white cursor-pointer'>
          < FaAngleLeft onClick={prevSlide}/>
        </div>

        <div className='absolute top-[50%]   right-5 text-2xl p-2 bg-black/20  text-white cursor-pointer'>
         <FaAngleRight onClick={nextSlide}/>
        </div>

        {/* content overlay */}
        <div className='absolute md:top-[40%] md:left-[10%] md:w-[30%] bottom-[10%]  w-[100%] md:text-left text-white flex-col text-center'>
          <h1 className='my-3 text-2xl font-bold pl-2'>
            {slides[currentIndex].content}
          </h1>
          <h2 className=' md:text-lg text-sm pl-2'>
            {slides[currentIndex].description}
          </h2>
         {/* <Link to="/event"><button className=' bg-white/20 md:text-2xl text-sm hover:bg-blue-600 py-1 px-8 rounded-[3px] my-3' >More details</button></Link>  */}
        </div>

      </div>
    </>
  );
};

export default Events;