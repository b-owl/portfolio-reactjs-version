import { useStateContext } from "../../context/Context";

import Styles from "./Loading.module.css";

const Loading = () => {
  const { currentColor, t } = useStateContext();
  return (
    <div
      style={{ direction: "ltr" }}
      className="flex flex-col items-center justify-center w-screen h-screen "
    >
      <h1
        style={{ color: currentColor }}
        className={`${Styles.loading} relative mb-12 text-4xl ltr:mr-10 rtl:font-soltan rtl:text-3xl`}
      >
        {t("loading")}
        <span className="absolute -right-4 rtl:-left-4" style={{ "--j": "1" }}>
          .
        </span>
        <span className="absolute -right-8 rtl:-left-8" style={{ "--j": "2" }}>
          .
        </span>
        <span className="absolute -right-12 rtl:-left-12" style={{ "--j": "3" }}>
          .
        </span>
      </h1>
      <div className="flex items-center justify-center gap-2 hand">
        <div
          style={{ "--i": "1" }}
          className={`${Styles.finger} ${Styles["finger-one"]} relative flex flex-col items-center justify-between w-10 dark:bg-main-bg bg-main-dark-bg h-28 rounded-2xl`}
        >
          <span
            style={{ background: currentColor }}
            className="absolute w-3/4 h-1 top-3"
          ></span>
          <span
            style={{ background: currentColor }}
            className="absolute w-3/4 h-1 top-5"
          ></span>
          <span
            style={{ background: currentColor }}
            className="absolute w-8 h-8 bottom-2 rounded-t-3xl rounded-b-xl "
          ></span>
        </div>
        <div
          style={{ "--i": "2" }}
          className={`${Styles.finger} ${Styles["finger-two"]} relative flex flex-col items-center justify-between w-10 h-32 dark:bg-main-bg bg-main-dark-bg rounded-2xl`}
        >
          <span
            style={{ background: currentColor }}
            className="absolute w-3/4 h-1 top-3"
          ></span>
          <span
            style={{ background: currentColor }}
            className="absolute w-3/4 h-1 top-5"
          ></span>
          <span
            style={{ background: currentColor }}
            className="absolute w-8 h-8 bottom-2 rounded-t-3xl rounded-b-xl "
          ></span>
        </div>
        <div
          style={{ "--i": "3" }}
          className={`${Styles.finger} ${Styles["finger-three"]} relative flex flex-col items-center justify-between w-10 h-40 dark:bg-main-bg bg-main-dark-bg rounded-2xl`}
        >
          <span
            style={{ background: currentColor }}
            className="absolute w-3/4 h-1 top-3"
          ></span>
          <span
            style={{ background: currentColor }}
            className="absolute w-3/4 h-1 top-5"
          ></span>
          <span
            style={{ background: currentColor }}
            className="absolute w-8 h-8 bottom-2 rounded-t-3xl rounded-b-xl "
          ></span>
        </div>
        <div
          style={{ "--i": "4" }}
          className={`${Styles.finger} ${Styles["finger-four"]} relative flex flex-col items-center justify-between w-10 h-32 dark:bg-main-bg bg-main-dark-bg  rounded-2xl`}
        >
          <span
            style={{ background: currentColor }}
            className="absolute w-3/4 h-1 top-3"
          ></span>
          <span
            style={{ background: currentColor }}
            className="absolute w-3/4 h-1 top-5"
          ></span>
          <span
            style={{ background: currentColor }}
            className="absolute w-8 h-8 bottom-2 rounded-t-3xl rounded-b-xl "
          ></span>
        </div>
        <div
          style={{ "--i": "4" }}
          className={`${Styles.finger} ${Styles["finger-five"]} relative flex flex-col items-center justify-between w-12 h-10 dark:bg-main-bg bg-main-dark-bg rounded-tr-xl rounded-br-3xl `}
        >
          <span className="absolute left-0 w-10 h-5 dark:bg-main-bg bg-main-dark-bg -top-4"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
