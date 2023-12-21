import React from 'react'
import { SlCalender } from "react-icons/sl";

function EventCard({title,content,eventyear,imgUrl}) {
  return (
    <>
      <div className='flex flex-row justify-center font-sansm my-8'>
        <div className="flex flex-col md:flex-row md:w-[80%] w-[100%] h-[40%] justify-around  px-6 mb-10 rounded-lg">

          {/* left container */}
          <div className='my-2 relative'>
            {/* left image */}
            <img src={imgUrl} alt="" className='md:w-[350px] md:h-[250px] w-[400px] h-[350px] rounded-md filter brightness-50 md:brightness-100 ' />
          </div>


          {/* right container */}
          <div className=' absolute md:static ml-2 md:w-[60%] text-white md:mr-10'>
            {/* right content */}

            <h1 className='text-4xl font-bold my-6'>{title}</h1>
            <p className='text-sm my-2 pr-6'>{content}</p>

            {/* colorfull divs */}
            <div className='flex flex-col md:flex-row my-4 text-sm justify-between'>
              <div className='flex flex-row justify-start md:justify-center items-start gap-2 md:flex-row'>
                <div className=' bg-orange-700 py-2 px-4 md:px-16 mr-2 rounded-full'>Startup</div>
                <div className=' bg-blue-700 py-2 px-4 md:px-16 mr-2 rounded-full'>Technical</div>
              </div>

              {/* calender */}
              <div className='flex flex-row gap-2 ml-4 justify-start md:justify-center md:items-center'>
                <div className='my-3'><SlCalender /></div>
                <div className='my-2'>{eventyear}</div>
              </div>
            </div>

          </div>

        </div>
      </div>


    </>
  )
}

export default EventCard