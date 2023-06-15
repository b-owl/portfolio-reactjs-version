import { BsTelegram, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillCloseCircle, AiFillInstagram } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../context/Context";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { currentColor, navItems, t } = useStateContext();
  return (
    <>
      <button
        className="absolute z-20 text-3xl font-semibold md:fixed right-8 top-6"
        onClick={() => setActiveMenu(true)}
      >
        <RiMenu3Line />
      </button>
      <div className={`${activeMenu ? "flex" : "hidden"} fixed z-20 h-full w-full`}>
        <div
          onClick={() => setActiveMenu(false)}
          className="z-0 w-full h-full text-gray-200 overlay bg-half-transparent-light dark:bg-half-transparent-dark dark:text-gray-800 "
        ></div>
        <nav
          className={`${Styles.navanime} fixed h-full navanime w-96`}
          style={{ background: currentColor }}
        >
          <ul className="flex flex-col justify-between w-full h-full px-5 py-10 direction">
            <div className="flex items-center justify-between w-full mb-10 text-2xl font-semibold text-gray-200 dark:text-gray-800">
              <h1 className="font-normal font-summer">Miro</h1>
              <button onClick={() => setActiveMenu(false)}>
                <AiFillCloseCircle />
              </button>
            </div>
            {navItems.map(({ name, href }, idx) => (
              <li
                className="flex items-center gap-2 text-2xl font-semibold md:text-3xl"
                key={idx}
              >
                <NavLink
                  onClick={() => {
                    setActiveMenu(false);
                  }}
                  className={({ isActive }) =>
                    isActive ? Styles.activeNavlink : ""
                  }
                  style={({ isActive }) => ({ color: isActive ? "black" : "" })}
                  to={href}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`${Styles.dot} w-3 h-3 border-black rounded-full border-1`}
                    ></span>
                    {name}
                  </div>
                </NavLink>
              </li>
            ))}
            <div className="flex items-center justify-between mt-10 font-semibold text-gray-200 dark:text-gray-800 rtl:font-casablanca ltr:font-summer">
              <h3 className="ltr:font-thin dark:text-gray-800">{t("followMe")}</h3>
              <div className="flex gap-3 contact">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-150"
                  href="https://www.instagram.com/mehdi0_0keramati"
                >
                  <AiFillInstagram />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-150"
                  href="https://www.github.com/mehdi0-0keramati"
                >
                  <BsGithub />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-150"
                  href="https://www.linkedin.com/in/mehdi-keramati-503533267"
                >
                  <BsLinkedin />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-150"
                  href="https://t.me/Mehdi0_0wa"
                >
                  <BsTelegram />
                </a>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
