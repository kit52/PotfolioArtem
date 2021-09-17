import React from 'react';
import Card from '../Card/Card';
import s from "./Works.module.css";
import img1 from "../../assets/img/1.png"
const Works = (props) => {
    return (
        <div className={s.container}>
            <Card
                title='Баннеры'
                decription="Баннеры для постов, промо-блоков и т.д. Используемый метод разработки — коллажирование."
                skills={["Ps"]}
                img={img1}
            />
        </div>
    );
};

export default Works;