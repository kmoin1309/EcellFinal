import React from 'react'
import landing from "../assets/landing.gif"

function Landing() {
    return (
        <>
            <div className="flex justify-center font-Onest">

                {/* main container */}
                <div className=" w-[100%] md:w-[100%] mt-10 flex flex-col justify-center items-center text-lg  rounded-lg  mx-1 p-4 md:mx-8 box-border md:flex-row-reverse">

                    {/* leftcontainer */}
                    < div className="w-[100%] p-6 flex flex-col justify-center mt-5 items-center  md:w-[40%]">
                    
                        <img src={`${landing}`} alt="" />
                    </div>


                    {/* right container */}

                    <div className="w-[100%] md:w-[60%] flex flex-col items-center font-sans  ">
                        <h2 className=" text-5xl my-4 text-white text-left">Ecell</h2>
                        <p className="text-base text-justify font-normal my-2 mx-0 md:mx-8 md:text-lg text-white">
                        E-Cell Terna is a non-profit organization dedicated to uniting entrepreneurial passions on a common platform. Through prime events like B-Plan competitions, leadership lectures, case study workshops, and innovative games, it facilitates interaction among college students, corporations, and wokrking professionals from across Mumbai.
                        </p>

                        <div className="flex flex-row justify-start my-4 w-full ml-16">
                            {/* <a href="" target="_blank">
                                <button className="text-sm bg-accent rounded-md px-4 py-2 text-white md:text-lg hover:bg-green transition ease-in-out  ">
                                    Learn More
                                </button>
                            </a> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Landing