import { lazy, Suspense } from "react";
import { useStateContext } from "../../context/Context";
import { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Project = lazy(() => import("./Project"));

const Portfolio = () => {
  const { currentColor, currentLang, portfolioTitle, portfolioData, t } =
    useStateContext();
  const [delay, setdelay] = useState(false);
  const [work, setWork] = useState();
  const [template, setTemplate] = useState(false);
  const [templateGern, setTemplateGern] = useState("ReactJS");
  const [activeTabTemplate, setActiveTabTemplate] = useState([true, false]);
  const [gern, setGern] = useState("All");
  const [activeTab, setActiveTab] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (gern === "All" || gern === "همه") {
      setWork(portfolioData[0]?.all);
    } else if (gern === "App" || gern === "اپلیکیشن") {
      setWork(portfolioData[0].app);
    } else if (gern === "Templates" || gern === "قالب") {
      setTemplate(true);
      if (templateGern === "ReactJS" || gern === "ری اکت") {
        setWork(portfolioData[0].templates[0].react);
      } else if (templateGern === "VanillaJS" || gern === "جاوااسکریپت") {
        setWork(portfolioData[0].templates[0].vanillaJS);
      }
    } else if (gern === "Games" || gern === "بازی") {
      setWork(portfolioData[0].games);
    } else if (gern === "GraphicDesign" || gern === "طراحی") {
      setWork(portfolioData[0].graphicDesign);
    }
  }, [gern, templateGern, currentLang]);

  useEffect(() => {
    if (portfolioData) {
      setdelay(true);
    } else {
      setdelay(false);
    }
  }, [portfolioData]);

  return (
    <>
      <div className="flex flex-col w-screen min-h-screen pt-10 mx-auto activeSection md:w-4/5">
        {delay && (
          <>
            <div style={{ animationDelay: "1s" }}>
              <div className="relative mb-10">
                <h3 className="rtl:font-TitrPlus absolute z-10 text-xl -translate-x-1/2 left-1/2">
                  {t("projects")}
                </h3>
                <span
                  style={{ background: currentColor }}
                  className="left-1/2 -top-1.5 -translate-x-1/2 rounded-full absolute w-8 h-8"
                ></span>
              </div>

              <h1 className="my-5 text-2xl text-center md:text-4xl rlt:font-casablanca ltr:font-summer">
                {t("seeProjects")}
              </h1>
              <div
                style={{ background: currentColor }}
                className="w-3/5 h-1 mx-auto md:w-2/5"
              >
                <div className="relative w-10 h-1 bg-main-bg dark:bg-main-dark-bg left-2/4 -translate-x-2/4 rtl:translate-x-2/4 rtl:-left-2/4">
                  <span className="absolute w-2 h-1 bg-black rounded-full left-2 dark:bg-white"></span>
                  <span className="absolute w-2 h-1 bg-black rounded-full left-6 dark:bg-white"></span>
                </div>
              </div>
            </div>

            <div
              style={{ animationDelay: "1s" }}
              className="flex items-center justify-center w-3/4 h-20 gap-2 mx-auto mt-10 text-xs text-center md:gap-4 md:text-md"
            >
              {portfolioTitle.map(({ name, activetab }, idx) => (
                <button
                  key={idx}
                  type="button"
                  style={{ background: activeTab[idx] ? currentColor : "" }}
                  className="p-2 py-1 mb-10 font-semibold text-gray-800 dark:text-gray-100 md:p-4 md:py-2 rounded-2xl"
                  onClick={() =>
                    setActiveTab(activetab) ||
                    setGern(name) ||
                    name === "templates"
                      ? setTemplate(true)
                      : setTemplate(false)
                  }
                >
                  {name}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {template ? (
            <>
              <div className="col-span-1 m-5 -mt-5 text-xs text-center sm:col-span-2 md:col-span-3 lg:col-span-4 md:text-md">
                <button
                  className="p-2 py-1 md:p-4 md:py-2 rounded-2xl"
                  style={{
                    background: activeTabTemplate[0] ? currentColor : "",
                  }}
                  type="button"
                  onClick={() =>
                    setTemplateGern("ReactJS") ||
                    setActiveTabTemplate([true, false])
                  }
                >
                  {t("reactjs")}
                </button>
                <button
                  className="p-2 py-1 md:p-4 md:py-2 rounded-2xl"
                  style={{
                    background: activeTabTemplate[1] ? currentColor : "",
                  }}
                  type="button"
                  onClick={() =>
                    setTemplateGern("VanillaJS") ||
                    setActiveTabTemplate([false, true])
                  }
                >
                  {t("vanillajs")}
                </button>
              </div>
              {work?.map(
                ({ pic, title, projectName, githubLink, viewOnline }, idx) => (
                  <Project
                    key={idx}
                    pic={pic}
                    title={title}
                    projectName={projectName}
                    githubLink={githubLink}
                    viewOnline={viewOnline}
                  />
                )
              )}
            </>
          ) : (
            work?.map(
              ({ pic, title, projectName, githubLink, viewOnline }, idx) => (
                <>
                  <Suspense
                    fallback={<Skeleton className="w-3/4 md:w-full h-64" />}
                  >
                    <Project
                      key={idx}
                      pic={pic}
                      title={title}
                      projectName={projectName}
                      githubLink={githubLink}
                      viewOnline={viewOnline}
                    />
                  </Suspense>
                </>
              )
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
