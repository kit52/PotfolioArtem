import React from 'react';
import s from "./Banner.module.css";
import imgDesctop from "../../assets/img/1step.png"
import ButtonBack from '../buttons/ButtonBack';
const Banner = () => {
    return (
        <div className={s.wrapper}>
            <ButtonBack />
            <h2 className={s.title}>Баннеры</h2>
            <div className={s.container}>
                <img src={imgDesctop} alt="all works" />
            </div>
            <ButtonBack />
        </div>
    );
};

export default Banner;