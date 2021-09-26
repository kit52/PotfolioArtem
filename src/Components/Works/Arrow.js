import s from "./Works.module.css";
import React from 'react';
import leftArrow from "../../assets/img/icons/Arrow2.svg"
import rigthArrow from "../../assets/img/icons/Arrow3.svg"
export const ArrowRigth = () => {
    return (
        <div className={s.arrow_rigth}>
            <img src={rigthArrow} alt="slide to rigth" />
        </div>
    );
};
export const ArrowLeft = () => {
    return (
        <div className={s.arrow_left}>
            <img src={leftArrow} alt="slide to left" />
        </div>
    );
};

