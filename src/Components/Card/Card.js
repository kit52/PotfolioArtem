import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Card.module.css"
const Card = (props) => {
    let skills = props.skills.map(item => {
        return <span className={s.skill__item}>{item}</span>
    })
    let decr = props.decription.map(item => {
        return <p className={s.decription}>{item}</p>
    })
    let content = <> {props.img ? <img className={s.image} src={props.img} alt="images" /> : <div className={s.image}></div>}
        <h2 className={s.title}>{props.title}</h2>
        <div className={s.skills}>
            {skills}
        </div>
        <div >
            {decr}
        </div>
    </>
    return (

        <div className={props.path ? `${s.content} ${s.active}` : s.content}>
            {props.path ? <NavLink to={props.path[0]}>{content}</NavLink> : [content]}
        </div>
    );
};

export default Card;