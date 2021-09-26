import React from 'react';
import s from "./Anion.module.css";
import ButtonBack from "../buttons/ButtonBack";
import img1 from "../../assets/img/3step.png";
import img2 from "../../assets/img/3step2.png";
const Anion = () => {
    return (
        <div className={s.wrapper}>
            <ButtonBack />
            <h2 className={s.title}>Анион</h2>
            <div className={s.container}>
                <img src={img1} alt="Anion" />
            </div>
            <div className={s.content}>
                <h2 className={s.subtitle}>UI-kit</h2>
                <div>
                    <img src={img2} alt="ui-kit" />
                </div>
            </div>
            <ButtonBack />
        </div>
    );
};

export default Anion;