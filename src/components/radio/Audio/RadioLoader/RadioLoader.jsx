"use client";

import { Audio } from "react-loader-spinner";
import { useMediaQuery } from "react-responsive";
import { variours } from "@/app/lib/variousRadio";
import css from "./RadioLoader.module.css";

const RadioLoader = () => {
  const is768 = useMediaQuery({ minWidth: 768 });

  return (
    <div className={css.loaderContainer}>
      {variours.map((item) => (
        <div key={item.id}>
          <Audio
            height={is768 ? "90" : "80"}
            width={is768 ? "70" : "60"}
            radius="12"
            color={"var(--radio-red"}
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ))}
    </div>
  );
};

export default RadioLoader;
