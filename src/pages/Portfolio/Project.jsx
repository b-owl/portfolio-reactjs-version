import { useStateContext } from "../../context/Context";
import Styles from "./Project.module.css";

const Project = ({ pic, title, projectName, githubLink, viewOnline }) => {
  const { currentColor, t } = useStateContext();
  return (
    <div
      className={`${pic} bg-center bg-contain bg-no-repeat w-3/4 md:w-full h-64 `}
    >
      <div
        className={`${Styles["project-item"]} flex flex-col items-center justify-center w-full h-full gap-4 overflow-hidden opacity-0 hover:opacity-100 dark:bg-slate-800/75 bg-slate-200/75`}
      >
        <span
          className={`${Styles.TitleText} text-sm ltr:font-summer rtl:font-TitrPlus`}
        >
          {title}
        </span>
        <h3
          style={{ WebkitTextStroke: `.9px ${currentColor}` }}
          className="-mt-3 text-xl font-semibold rtl:font-soltan ltr:font-robotoBold"
        >
          {projectName}
        </h3>

        <div className="flex gap-4 cursor-pointer rtl:font-casablanca">
          <a
            target="_blank"
            rel="noreferrer"
            style={{ background: currentColor }}
            className={`${Styles.link} px-2 py-1 text-sm -translate-x-24 rounded-lg shadow-md hover:border-1`}
            href={githubLink}
            type="button"
          >
            {t("viewGithub")}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            style={{ background: currentColor }}
            className={`${Styles.link} px-2 py-1 text-sm translate-x-24 rounded-lg shadow-md hover:border-1`}
            href={viewOnline}
            type="button"
          >
            {t("liveDemo")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
