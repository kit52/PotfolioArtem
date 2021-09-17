import React from 'react';
import s from "./ButtonNext.module.css";
import arrow from "../../assets/img/icons/Arrow.svg"
import { NavLink } from 'react-router-dom';
const ButtonNext = () => {
    return (
        <NavLink to="Works">
            <div className={s.button}>
                <img className={s.img} src={arrow} alt="icon next" />
            </div>
        </NavLink>
    );
};

export default ButtonNext;