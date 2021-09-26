import React from 'react';
import Card from '../Card/Card';
import s from "./Works.module.css";
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";
import img6 from "../../assets/img/6.png";
import { NavLink } from 'react-router-dom';
import { Carousel } from '@trendyol-js/react-carousel';
const Works = (props) => {
    let text = <span>Были разработаны <span className="skills_bold">UI-kit: система компонентов и стилей.</span></span>
    let windowWidth = 0;
    const width = window.screen.width;
    if (width > 2800) {
        windowWidth = 6.5
    } else if (width > 2000) {
        windowWidth = 5.5
    } else if (width > 1775) {
        windowWidth = 4.5
    } else if (width > 1530) {
        windowWidth = 3.8
    } else if (width > 1280) {
        windowWidth = 3.4
    } else if (width > 1024) {
        windowWidth = 2.5
    } else if (width > 800) {
        windowWidth = 2
    } else if (width > 600) {
        windowWidth = 1.5
    } else {
        windowWidth = 1
    }
    console.log(windowWidth);
    return (
        <div className={s.container}>
            <div className={s.content}>
                <Carousel show={windowWidth}  >
                    <Card
                        title='Soft-managment'
                        decription={["Проектирование и прототипирование сайта."]}
                        skills={["Miro",]}
                        img={img6}
                        path={["/SoftManagment"]}
                    />
                    <Card
                        title='Баннеры'
                        decription={["Баннеры для постов, промо-блоков и т.д.", "Используемый метод разработки — коллажирование."]}
                        skills={["Ps"]}
                        img={img1}
                        path={["/Banner"]}
                    />
                    <Card
                        title='Lost Shirt'
                        decription={["Вёрстка и frontend разработка сайта принтов для одежды."]}
                        skills={["Html", "Css", "Js", "GitHub"]}
                        img={img2}
                        path={["/LostShirt"]}
                    />
                    <Card
                        title='Анион'
                        decription={["Редизайн сайта компании «Анион»", text]}
                        skills={["Figma", "Ps",]}
                        img={img3}
                        path={["/Anion"]}
                    />
                    <Card
                        title='Клинкманн'
                        decription={["Разработка прототипа сайта по готовой аналитике и тех.заданию.",]}
                        skills={["Axure",]}
                        img={img5}
                        path={["/Klinkman"]}
                    />
                    <Card
                        title='Let’s Rock'
                        decription={["Разработка структуры и дизайна статей для блога digital-агенства Let’s Rock."]}
                        skills={["Figma", "Ps"]}
                        img={img4}
                    />
                    <Card
                        title='Мобильная разработка'
                        decription={["В разработке"]}
                        skills={["Figma",]}

                    />

                </Carousel>
            </div>
        </div>
    );
};

export default Works;