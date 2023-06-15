import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Settings, Sidebar, ShortcutPages, GetinTouch } from "./components";
import { useStateContext } from "./context/Context";
import "./app.css";
import Loading from "./components/Loading/Loading";

const App = () => {
  const navigate = useNavigate();
  const {
    loading,
    setLoading,
    currentMode,
    setCurrentMode,
    currentColor,
    setCurrentColor,
    currentLang,
    setCurrentLang,
    i18n,
  } = useStateContext();

  useEffect(() => {
    const theme = localStorage.getItem("ThemeMode");
    const color = localStorage.getItem("colorMode");
    const lang = localStorage.getItem("currentLang");

    if (theme || lang || color) {
      setCurrentMode(theme || "light");
      setCurrentColor(color || "#F55050");
      setCurrentLang(lang || "en");
      i18n.changeLanguage(lang);
    }

    if (lang === "fa") {
      document.body.setAttribute("dir", "rtl");
    } else {
      document.body.setAttribute("dir", "ltr");
    }
  }, [currentLang, currentColor, currentMode]);

  useEffect(() => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "" ||
      window.location.pathname === "/portfolio" ||
      window.location.pathname === "/portfolio/"
    ) {
      navigate("./home");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      var currentState = false;
      var mainTitle = document.querySelector("title").innerHTML;

      setInterval(startAnimation, 2600);

      function startAnimation() {
        document.querySelector("title").innerHTML = currentState ? mainTitle : "😎";
        currentState = !currentState;
      }
    }, 3000);
  }, [document.title]);

  return (
    <div
      className={`${
        currentMode === "dark" ? "dark" : ""
      } rtl:font-soltan font-robotoBold `}
    >
      <div className="text-gray-800 bg-main-bg dark:bg-main-dark-bg dark:text-gray-200">
        <style>
          {`::-webkit-scrollbar{
                            width: 0.5rem !important;
                            background: gray !important;
                        }`}
          {`::-webkit-scrollbar-thumb{
                            background: ${currentColor} !important;
                        }`}
        </style>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <Sidebar />
            <div className="">
              <Settings />
            </div>
            <ShortcutPages />
            <GetinTouch />
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
