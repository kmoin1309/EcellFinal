import { useEffect, useState } from "react";
import { close, menu, ecell_logo } from "../assets";
import { Link } from "react-router-dom";

export const navLinks = [
  {
    id: "home",
    title: "HOME",
    link: "/",
  },
  {
    id: "about",
    title: "ABOUT",
    link: "/about",
  },
  {
    id: "event",
    title: "EVENTS",
    link: "/event",
  },
  {
    id: "team",
    title: "TEAM",
    link: "/team",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("HOME");
  const [toggle, setToggle] = useState(false);
  const [scrolling , setScrolling ] = useState(false)

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setToggle(!toggle);
    // Toggle body overflow to prevent horizontal scrolling when the sidebar is active
    document.body.style.overflowX = toggle ? "hidden" : "auto";
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className= {`z-50 w-[100%] text-content overflow-hidden fixed ${scrolling ? 'bg-[#100928]' : ''}`}>
        <div className={`sm:px-8 px-2 flex justify-around items-center`}>
          <div className={`xl:max-w-[1280px] w-11/12`}>
            <nav className="w-full flex py-6 justify-between items-center navbar">
              {/* Logo */}
              <Link to={"/"}>
              <img
                className="h-[3.8rem] sm:h-[4rem] md:h-[5rem] md: lg:h-20"
                src={ecell_logo}
                alt="ECELL TEC"
              />
              </Link>

              {/* Desktop Navigation */}
              <ul className="list-none md:flex hidden justify-center items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-Onest mx-12 font-semibold cursor-pointer text-[12px]  md:text-[14px] ${
                      active === nav.title ? "text-stone-200" : "text-stone-400"
                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <Link to={nav.link}>{nav.title}</Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Navigation */}
              <div className="md:hidden flex flex-1 justify-end items-center">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          toggle ? "translate-x-0" : "translate-x-full"
        } fixed flex justify-center items-center w-[100%] h-full custom-gradient-1 shadow-[inset_black_50px_50px_800px] transition-transform transform duration-300 ease-in-out z-40`}
      >
        <ul className="list-none flex flex-col pt-6 gap-y-8">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`w-[100%] text-center font-Onest font-semibold cursor-pointer text-[20px] py-2 ${
                active === nav.title ? "text-stone-200" : "text-stone-400"
              } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => {
                setActive(nav.title);
                toggleSidebar(); // Close the sidebar when a link is clicked
              }}
            >
              <Link to={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
