import React from 'react';
import s from "./Klinkman.module.css";
import ButtonBack from "../buttons/ButtonBack";
import img from "../../assets/img/5step.png";
const Klinkman = () => {
    return (
        <div className={s.wrapper}>
            <ButtonBack />
            <h2 className={s.title}>Клинкманн</h2>
            <div className={s.container}>
                <img src={img} alt="Клинкманн" />
            </div>
            <div>
                <div>
                    <p className={s.text}>Инструменты: <span className={s.text_bold}>Axure</span></p>
                    <p className={s.text}>Ссылка на проект: <a className={s.link} target="_blank" href="https://zn4e0e.axshare.com/#id=pfbaud">https://zn4e0e.axshare.com/#id=pfbaud.</a></p>
                </div>
            </div>
        </div>
    );
};

export default Klinkman;