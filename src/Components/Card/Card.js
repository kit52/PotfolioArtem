import React from 'react';
import s from "./Card.module.css"
const Card = (props) => {
    console.log(props.skills);
    let skills = props.skills.map(item => {
        return <span className={s.skill__item}>{item}</span>
    })
    return (
        <div className={s.content}>
            <img className={s.image} src={props.img} alt="images" />
            <div>
                <h2 className={s.title}>{props.title}</h2>
            </div>
            <div className={s.skills}>
                {skills}
            </div>
            <div className={s.skills}>
                <p>{props.decription}</p>
            </div>
        </div>
    );
};

export default Card;