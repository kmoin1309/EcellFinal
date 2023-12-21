import React, { useState } from 'react'
import EventCard from '../components/EventCard';
import {accelarationIncubation,
    angelInvestment,
    designThinking,
    escobar2,
    entSkills,
    igniteMeetUp,
    incubationVisit,
    IncubationVisit,
    innovationAndEnt,
    innovationDev,
    posterLogo,
    report1,
    youthRole,
    webinar1,
    report2,
    report4,} from "../assets";
import { Link } from 'react-router-dom';

function Eventpage() {

    const [Year, setyear] = useState("2022");

    const handleClick = (e)=>{
        const filterYear=e.currentTarget.id;
        console.log(filterYear);
        setyear(filterYear);
    }

    const YearApi = [
        {
            event: "2022"
        },
        {
            event: "2023"
        }
    ]

    const EventDetials = [
        {
            "id": 1,
            "imgUrl":`${accelarationIncubation}`,
            "title": "Accelaration Incubation",
            "content": "The Acceleration Incubation Session is designed to empower entrepreneurs, innovators, and startup enthusiasts by providing them with essential tools, insights, and strategies to accelerate the growth of their ventures. This session aims to cultivate a engage in collaborative discussions, and gain a deeper understanding of the key factors that drive successful business acceleration.",
            "eventyear": "2022"
        },
        
        {
            "id": 2,
            "imgUrl":`${angelInvestment}`,
            "title": "Angel Investment",
            "content": "The Angel Investment and VC Funding for Early Stage Entrepreneurs brief is crafted to equip emerging business leaders with the knowledge and strategies necessary to secure financial support during the crucial early stages of their ventures. This session delves into the dynamics of Angel Investment and Venture Capital (VC) funding, providing insights into the intricacies of attracting and managing external investment for sustainable growth.",
            "eventyear": "2022"
        },
        
        {
            "id": 3,
            "imgUrl":`${designThinking}`,
            "title": "Thinking Session",
            "content": "The Design Thinking, Critical Thinking, and Innovation Design Session is a dynamic and interactive workshop designed to cultivate a holistic approach to problem-solving and innovation. This session brings together three essential elements — Design Thinking, Critical Thinking, and Innovation Design — to empower participants with the skills and mindset required to address complex challenges, foster creativity, and drive meaningful innovation.",
            "eventyear": "2022"
        },
        
        {
            "id": 4,
            "imgUrl":`${entSkills}`,
            "title": "Entrepreneurship",
            "content": "The Entrepreneurship Skill, Attitude, and Behavior Development session is a transformative workshop focused on equipping aspiring entrepreneurs with the essential qualities needed for success in the dynamic startup ecosystem. This session goes beyond traditional business knowledge and delves into the crucial aspects of cultivating the right skills, fostering a positive attitude, and developing behaviors that contribute to sustainable entrepreneurial success.",
            "eventyear": "2022"
        },
        
        {
            "id": 5,
            "imgUrl":`${igniteMeetUp}`,
            "title": "Ignite",
            "content": "It was an exclusive gathering designed to bring together aspiring and established entrepreneurs for networking, knowledge exchange, and inspiration. Hosted by Arun Deshpande, a seasoned entrepreneur and industry leader, this meetup aims to foster a vibrant community where individuals can connect, share experiences, and gain valuable insights to propel their entrepreneurial journeys.",
            "eventyear": "2022"
        },
        
        {
            "id": 6,
            "imgUrl":`${incubationVisit}`,
            "title": "Jai Hind Clg Incubation Visit",
            "content": "The Jai Hind College Incubation Visit is a unique opportunity for students and aspiring entrepreneurs to gain firsthand insights into the world of innovation, startup incubation, and entrepreneurial mentorship. Hosted by Jai Hind College, this visit aims to bridge the gap between academia and industry by exposing participants to a thriving incubation ecosystem.",
            "eventyear": "2022"
        },
        
        {
            "id": 7,
            "imgUrl":`${innovationAndEnt}`,
            "title": "Session on Innovaation /Entrepreneurship",
            "content": "Innovation and Entrepreneurship as Career Opportunities session is a dynamic and insightful workshop tailored to inspire individuals to explore the exciting realms of innovation and entrepreneurship as viable career paths. ",
            "eventyear": "2022"
        },
        
        {
            "id": 8,
            "imgUrl":`${innovationDev}`,
            "title": "Innovation Development",
            "content": "The Expert Talk on Innovation Development is a dynamic session aimed at providing participants with valuable insights and practical strategies for fostering innovation within organizations. Led by a seasoned expert in the field, this talk is designed to inspire, educate, and guide individuals and teams on the journey towards creating a culture of innovation and driving meaningful development.",
            "eventyear": "2022"
        },
        
        {
            "id": 9,
            "imgUrl":`${posterLogo}`,
            "title": "Logo and Poster competition",
            "content": "The Logo and Poster Making Competition is an engaging and creative event designed to harness the artistic talents of participants in crafting unique visual representations. This competition provides an opportunity for individuals to showcase their design skills, convey meaningful messages, and foster a sense of community through visual storytelling.",
            "eventyear": "2022"
        },
        
        {
            "id": 10,
            "imgUrl":`${youthRole}`,
            "title": "Youth Innovation / Entrepreneurship",
            "content": "The Role of Youth in Innovation and Entrepreneurship is a compelling session that explores potential of the younger generation in driving innovation and entrepreneurial endeavors. This session is designed to inspire and equip young individuals with the mindset, skills, and knowledge needed to become catalysts for positive change in the world of business and innovation.",
            "eventyear": "2022"
        },
        
        {
            "id": 1.1,
            "imgUrl":`${report1}`,
            "title": "Motivational Session",
            "content": "motivational session conducted by Mr.Sanat Patil who is the founder of a very successful startup Scrapnest on date 30th January 2023. The session was attended by a group of students who are interested in starting their own businessHe also discussed the value of hard work and perseverance, and the need to embrace failure as a opportunity. ",
            "eventyear": "2023"
        },
        
        {
            "id": 1.2,
            "imgUrl":`${report2}`,
            "title": "Prototype Prodigy",
            "content": ". The event was held to showcase new and upcoming technologies, as well as to provide a platform for networking and collaboration. It was a great opportunity for attendees to learn, share their experiences, and connect with other professionals in the field.Over 150 attendees from different branches of engineering learned from talks, workshops, and demos covering and rapid prototyping, and product design.",
            "eventyear": "2023"
        },
        {
            "id": 1.4,
            "imgUrl":`${report4}`,
            "title": "Logo Making",
            "content": " The participants were given an hour to design their logos it allowed students to develop and create something that should potentially become the T.I.I.C’s official logo. It also provided the council with a new and exciting way to encourage with the student. The judges evaluated all the submitted logos and picked the winner. The winning design was an eye-catching logo that incorporated Terna Innovative Incubation Center’s name and a modern, colorful design.",
            "eventyear": "2023"
        },
    {
        "id": 11,
        "imgUrl":`${escobar2}`,
        "title": "ESCOBAR 2.0",
        "content": "The Escobar 2.0 event by TERNA E-CELL on August 25, 2023, was a dynamic startup idea competition at Terna Engineering College. It showcased entrepreneurial ingenuity, strategic thinking, and ethical conduct. Led by ECell Secretary Mainak Saha, the competition fostered professionalism and innovation, leaving a lasting impact on participants and emphasizing the importance of adhering to rules.",
        "eventyear": "2023"
      },
      
      {
        "id": 12,
        "imgUrl":`${webinar1}`,
        "title": "Webinar",
        "content": "CEO Shri. S. Dodmise of SIBIC Incubator conducted a pivotal webinar on entrepreneurship prospects, organized by E Cell and IIC TEC on August 19, 2023. Focused on idea validation and strategy, the virtual workshop, enriched by Dodmise's expertise, left participants inspired. E-Cell Secretary Mainak Saha expressed gratitude, marking the event's success.",
        "eventyear": "2023"
      },
      
      {
        "id": 13,
        "imgUrl":`${webinar1}`,
        "title": "Youth Festival",
        "content": "The youth festival is a vibrant celebration of creativity, talent, and diversity. It brings together young individuals in a dynamic showcase of music, art, dance, and various performances, fostering a lively and inclusive atmosphere that reflects the spirit and energy of the youth.",
        "eventyear": "2023"
      },
      
      {
        "id": 14,
        "imgUrl":`${IncubationVisit}`,
        "title": "Incubation Visit",
        "content": "The E-cell committee visited K.J Somaiya College's riiDL Incubation Centre, exposing 40+ students to innovation. riiDL supports startups with workspaces, mentoring, and advanced labs. Fostering 60+ startups, it generated Rs 290 cr revenue, created jobs, and offered internships to 200 students annually. The visit, led by E-cell Secretary Mainak Saha, provided valuable insights and inspiration.",
        "eventyear": "2023"
      },      
    ]
    return (
        <>

            <div className='mb-10'>

                <div className='flex flex-row justify-center px-2 pt-[120px]'>
                    <ul className="flex md:flex-row flex-col-reverse text-lg font-medium text-center text-gray-500 dark:text-gray-400">
                        <div className='flex flex-row'>
                        {
                            YearApi.map((item) => (
                                <li id={item.event} key={item.event} className=" text-sm my-2 mx-2 md:mx-4" onClick={handleClick}>
                                    <Link to="#" className="flex px-1 py-1 rounded-xl outline outline-2 text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <div className="grid grid-cols-2 space-x-0">
                                                <svg className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="-7 -7 30 30">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"></path>
                                                </svg>
                                                <div><p className="h-4 text-left mt-2.5">{item.event}</p></div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                        </div>
                        <li>
                            <form action="">
                                <div className="border-2 rounded-full overflow-hidden flex mt-4">
                                    <input type="text" className="px-2 py-2 md:px-4 bg-transparent" placeholder="Search..." />
                                    <button className="flex items-center justify-center px-4 border-l">
                                        <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
                {
                    EventDetials.map((event) => (
                        event.eventyear == Year ? <EventCard key={event.id} {...event} /> : null
                    ))
                }
            </div>

        </>
    )
}

export default Eventpage