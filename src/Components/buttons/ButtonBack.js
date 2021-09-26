import React from 'react';
import s from "./ButtonBack.module.css";
import { NavLink } from 'react-router-dom';
const ButtonBack = () => {
    return (
        <NavLink to="Works" className={s.container}>
            <span className={s.span}></span>
            <div className={s.img} />
        </NavLink>
    );
};

export default ButtonBack;