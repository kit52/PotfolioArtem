import React from 'react';
import s from "./LostShirt.module.css";
import ButtonBack from "../buttons/ButtonBack";
import img from "../../assets/img/2step.png";
const LostShirt = () => {
    return (
        <div className={s.wrapper}>
            <ButtonBack />
            <h2 className={s.title}>Lost Shirt</h2>
            <div className={s.container}>
                <img src={img} alt="Lost Shirt" />
            </div>
            <div>
                <div>
                    <p className={s.text}>Инструменты: <span className={s.text_bold}> VS Code + GitHub.</span></p>
                    <p className={s.text}>Технология:  <span className={s.text_bold}>HTML + CSS + Java Script.</span></p>
                    <p className={s.text}>Ссылка на проект: <a className={s.link} target="_blank" href="https://izar7.github.io/loft_clothes/#">  https://izar7.github.io/loft_clothes/#.</a></p>
                </div>
            </div>
        </div>
    );
};

export default LostShirt;