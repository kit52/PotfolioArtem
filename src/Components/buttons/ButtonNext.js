import React from 'react';
import s from "./ButtonNext.module.css";
import arrow from "../../assets/img/icons/Arrow.svg"
import { NavLink } from 'react-router-dom';
const ButtonNext = (props) => {
    return (

        <div className={s.button} onClick={props.func}>
            <span className={s.span}></span>
            <img className={s.img} src={arrow} alt="icon next" />
        </div>

    );
};

export default ButtonNext;