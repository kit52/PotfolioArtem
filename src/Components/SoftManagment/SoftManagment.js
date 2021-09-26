import React from 'react';
import s from "./SoftManagment.module.css";
import ButtonBack from "../buttons/ButtonBack";
import img from "../../assets/img/6step.png";
const SoftManagment = () => {
    return (
        <div className={s.wrapper}>
            <ButtonBack />
            <h2 className={s.title}>Soft-managment</h2>
            <div className={s.container}>
                <img src={img} alt="Soft-managment" />
            </div>
            <div>
                <div>
                    <p className={s.text}>Инструменты: <span className={s.text_bold}>Miro, Axure</span></p>
                    <p className={s.text}>Ссылка на проект (Miro): <a className={s.link} target="_blank" href="https://zn4e0e.axshare.com/#id=pfbaud">https://zn4e0e.axshare.com/#id=pfbaud.</a></p>
                    <p className={s.text}>Ссылка на проект (Axure): <a className={s.link} target="_blank" href="https://zn4e0e.axshare.com/#id=pfbaud">https://sawyj8.axshare.com/#id=hyn1rl.</a></p>
                </div>
            </div>
        </div>
    );
};

export default SoftManagment;