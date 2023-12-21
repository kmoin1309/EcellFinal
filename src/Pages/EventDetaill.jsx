import React from 'react'
import SpeakerCard from '../components/SpeakerCard'
import WinnerCards from '../components/WinnerCards'

function EventDetaill() {
    return (
        <>
            {/* main contianer */}
            <div className='overflow-hidden w-full h-[full] m-auto py-5  font-sans flex flex-col justify-center items-center  bg-gradient-to-b from-[#0A0919] to-[#3601D8]'>
                <div className='relative w-full h-[70vh]'>
                    <div style={{
                        background: 'rgba(0,0,0,0.7)',
                        backgroundImage: `url(https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg?fit=1280%2C720&ssl=1)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundBlendMode: 'darken'
                    }} className={` absolute w-[80%] h-[80%] top-[10%] right-[10%]  duration-700 ease `}>
                    </div>

                    {/* content block */}
                    <div className='absolute md:top-[20%] md:left-[20%] md:w-[30%] bottom-[20%] left-[10%] w-[80%] md:text-left text-white flex-col text-center'>
                        <h1 className='my-3 text-2xl font-bold pl-2'>
                            Avalon
                        </h1>
                        <h1 className='my-3  pl-2'>Date:16/11/2023</h1>
                        <h2 className=' md:text-lg text-sm pl-2'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat autem, animi assumenda officia numquam? Rerum nam, alias officia aspernatur error cumque odit quisquam, ipsum possimus ducimus doloribus labore reprehenderit.
                        </h2>
                        <button className=' bg-white/20 md:text-2xl text-sm hover:bg-blue-600 py-1 px-8 rounded-[3px] my-3' >More details</button>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row'>

                    <div className='flex-col justify-center items-center   md:w-[50%]'>
                        <div className='text-center'>
                            <h1 className='text-2xl text-white'>winner names</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <WinnerCards />
                            <WinnerCards />
                            <WinnerCards />
                        </div>

                    </div>

                    <div className='flex-col justify-center items-center  md:w-[70%]'>
                        <div className='text-center'>
                            <h1 className='text-2xl text-white'>Speakers Name</h1>
                        </div>
                        <div className=' flex flex-col justify-center items-center md:flex-row '>
                            <SpeakerCard />
                            <SpeakerCard />
                            <SpeakerCard />
                        </div>

                    </div>

                </div>



            </div>

        </>
    )
}

export default EventDetaill