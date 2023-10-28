import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import logo from "../assets/cocktail.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { useGlobally } from "./Context";

const Navbar = () => {
  const {  closeSubmenu } = useGlobally();
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverNewsletter, setHoverNewsletter] = useState(false);
  const navRef = useRef(null);

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains("categories")) closeSubmenu();
  };


  const scrollFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navRef.current.style.cssText = `padding:5px 10px; background-color:#001`;
    } else {
      navRef.current.style.cssText = `padding:20px 10px; background-color:transparent`;
    }
  };

  window.onscroll = () => scrollFunc();

  return (
    <nav
      onMouseOver={hideSubmenu}
      ref={navRef}
      className="fixed w-full top-0 padd z-10 uppercase"
    >
      <div className="flex items-center justify-between max-w-6xl m-auto">
        <div className="flex items-center">
          <img className="w-8" src={logo} alt="logo" />
          <p id="LOGO" className="text-3xl font-bold text-blue-500 capitalize">
            Appetizer
          </p>
        </div>
        <div className="flex items-center gap-3 text-xl">
          <BsFacebook id="facebook" className="text-blue-500 cursor-pointer" />
          <BsTwitter className="text-sky-400 cursor-pointer" />
          <BsInstagram className="text-red-500 cursor-pointer" />
        </div>
      </div>
      <div>
        <div className="flex items-center max-w-6xl m-auto px-[13px] pt-4 flex-wrap gap-3 text-white font-bold">
          <article className="overflow-hidden">
            <NavLink
              onMouseOver={() => setHoverHome(true)}
              onMouseLeave={() => setHoverHome(false)}
              className={`flex items-center gap-1 transition duration-300 navLink`}
              to="/cocktails-react/"
            >
              Home
            </NavLink>
            <div
              className={`w-full border-b-2 border-b-blue-600 m-auto transition-all duration-300 ${
                hoverHome
                  ? "translate-x-0 visible"
                  : "translate-x-[-100%] invisible"
              }`}
            ></div>
          </article>
          <article className="overflow-hidden">
            <NavLink
              onMouseOver={() => setHoverAbout(true)}
              onMouseLeave={() => setHoverAbout(false)}
              className={`transition duration-300 navLink`}
              to={`/cocktails-react/about`}
            >
              About
            </NavLink>
            <div
              className={`w-full border-b-2 border-b-blue-600 m-auto transition-all duration-300 ${
                hoverAbout
                  ? "translate-x-0 visible"
                  : "translate-x-[-100%] invisible"
              }`}
            ></div>
          </article>
          <article className="overflow-hidden">
            <NavLink
              onMouseOver={() => setHoverNewsletter(true)}
              onMouseLeave={() => setHoverNewsletter(false)}
              className={`transition duration-300 navLink`}
              to={`/cocktails-react/newsletter`}
            >
              Newsletter
            </NavLink>
            <div
              className={`w-full border-b-2 border-b-blue-600 m-auto transition-all duration-300 ${
                hoverNewsletter
                  ? "translate-x-0 visible"
                  : "translate-x-[-100%] invisible"
              }`}
            ></div>
          </article>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
