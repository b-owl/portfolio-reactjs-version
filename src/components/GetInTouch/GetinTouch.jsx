import { BsTelegram, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import { useStateContext } from "../../context/Context";

const GetinTouch = () => {
  const { currentColor, t } = useStateContext();
  return (
    <div className="fixed z-10 flex-col items-center justify-center hidden gap-3 ltr:font-summer top-52 -left-2 md:flex rtl:font-casablanca">
      <a
        target="_blank"
        rel="noreferrer"
        className="contactlink hover:scale-150"
        href="https://www.instagram.com/mehdi0_0keramati"
      >
        <AiFillInstagram />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="contactlink hover:scale-150"
        href="https://www.github.com/mehdi0-0keramati"
      >
        <BsGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="contactlink hover:scale-150"
        href="https://www.linkedin.com/in/mehdi-keramati-503533267"
      >
        <BsLinkedin />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="contactlink hover:scale-150"
        href="https://t.me/Mehdi0_0wa"
      >
        <BsTelegram />
      </a>

      <style>
        {`.contactlink:hover{
            color:${currentColor}!important;
        }`}
      </style>

      <h4 className="w-1 mx-3 border-black h-14 border-r-1 dark:border-white "></h4>
      <h4 className="m-5 mt-8 -rotate-90 rtl:font-bold">{t("followMe")}</h4>
    </div>
  );
};

export default GetinTouch;
