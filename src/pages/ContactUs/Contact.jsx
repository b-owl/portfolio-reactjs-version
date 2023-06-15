import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useStateContext } from "../../context/Context";

import { ContactPic } from "../../assets/dummy";
import Styles from "./ContactUs.module.css";

const Contact = () => {
  const { currentColor, t } = useStateContext();
  const form = useRef();
  const alr = useRef();
  const loading = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    loading.current.classList.add("active");

    emailjs
      .sendForm(
        "service_48lj0ke",
        "template_d6m0fne",
        form.current,
        "srOSEOrJ89xFliQby"
      )
      .then(
        (result) => {
          console.log(result.text);
          alr.current.classList.add("active");
          loading.current.classList.remove("active");
        },
        (error) => {
          console.log(error.text);
        }
      );
    alr.current.classList.remove("active");
  };

  return (
    <div className="flex items-start justify-center min-h-screen p-10 py-20 mx-auto activeSection lg:w-4/5 md:p-20 lg:p-10 md:gap-x-16 ">
      <div className="relative hidden lg:block lg:basis-1/3 h-92">
        <div
          style={{ background: currentColor, zIndex: "-1" }}
          className="absolute bottom-0 left-0 w-full h-full rounded-lg opacity-20"
        ></div>
        <img className="w-full h-full" src={ContactPic} alt="" />
      </div>

      <div className="basis-full lg:basis-2/3">
        <div className="relative">
          <h2 className="absolute z-10 text-xl rtl:font-semibold font-casablanca ltr:font-summer">
            {t("contact")}
          </h2>
          <span
            style={{ background: currentColor }}
            className="absolute w-10 h-10 rounded-full rtl:-right-4 -left-4 -top-2"
          ></span>
        </div>

        <h1 className="mt-10 mb-5 text-4xl font-semibold font-casablanca ">
          {t("getInTouch")}
        </h1>
        <div
          style={{ background: currentColor }}
          className="w-20 h-1 m-2 mb-4"
        ></div>
        <p className="text-sm text-gray-400">{t("contactDescription")}</p>

        <div
          style={{
            background: currentColor,
            left: localStorage.getItem("currentLang") === "fa" ? "2rem" : "80%",
          }}
          ref={alr}
          className={`${Styles.alert} text-md rtl:font-soltan rtl:font-semibold`}
        >
          {t("messageSended")}
          <span></span>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col w-full gap-4 my-10 md:flex-row">
            <div className="relative h-10 border-black md:basis-2/4 border-1 dark:border-white ">
              <label
                className="px-6 flex items-center justify-center ltr:font-summer rtl:right-10 rtl:w-4 absolute left-4 -top-2.5 bg-main-bg dark:bg-main-dark-bg  rtl:font-semibold text-sm"
                htmlFor="name"
              >
                {t("yourName")}
              </label>
              <input
                name="user_name"
                style={{ outlineColor: currentColor }}
                className="w-full h-full p-4 text-red-400 bg-transparent valid:text-green-400"
                id="name"
                type="text"
                required
              />
            </div>
            <div className="relative h-10 border-black md:basis-2/4 border-1 dark:border-white ">
              <label
                className="px-6 flex items-center justify-center ltr:font-summer rtl:right-10 rtl:w-4 absolute left-4 -top-2.5 bg-main-bg dark:bg-main-dark-bg  rtl:font-semibold text-sm"
                htmlFor="email"
              >
                {t("yourEmail")}
              </label>
              <input
                name="user_email"
                style={{ outlineColor: currentColor }}
                className="w-full h-full p-4 text-red-400 bg-transparent valid:text-green-400"
                type="email"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label
              className="px-6 flex items-center justify-center ltr:font-summer rtl:right-10 rtl:w-4 absolute left-4 -top-2.5 bg-main-bg dark:bg-main-dark-bg  rtl:font-semibold text-sm"
              htmlFor="textarea"
            >
              {t("yourMessage")}
            </label>
            <textarea
              name="message"
              style={{ outlineColor: currentColor }}
              className="w-full p-4 bg-transparent border-black resize-y h-36 border-1 dark:border-white"
              id="textarea"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <input
            ref={loading}
            type="submit"
            style={{ background: currentColor }}
            className={`${Styles.loading} px-6 py-3 mt-4 mb-16 font-semibold cursor-pointer hover:shadow-md dark:shadow-white/25 shadow-black`}
            value={t("sendMessage")}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
