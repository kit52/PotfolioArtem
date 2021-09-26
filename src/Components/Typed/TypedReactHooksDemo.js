import { React, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import ButtonNext from "../buttons/ButtonNext";
import Works from "../Works/Works";
import s from "./Typed.module.css"
export const TypedReactHooksDemo = () => {
    const el = useRef(null);
    const typed = useRef(null);
    const [state, setState] = useState(false);
    const [visible, setVisible] = useState(true);
    const setVisibleHandler = () => {
        setVisible(false)
    }
    useEffect(() => {
        const options = {
            strings: [
                'Привет',
                'Рад тебя видеть',

            ],
            startDelay: 1500, // Задержка перед стартом анимации
            typeSpeed: 115,
            backSpeed: 50,
            backDelay: 1000,
            showCursor: false,
            cursorChar: "|",
        };

        typed.current = new Typed(el.current, options);
        setTimeout(() => {
            setState(true)
        }, 8000);
        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div className={s.box}>
            <div className={visible ? s.wrap : `${s.wrap}  ${s.hide}`}>
            </div>
            <div className={visible ? s.content : `${s.animated} ${s.content}`}>
                <div className={s.content_wrapper}>
                    <div className={s.banner}>
                        <div className={s.type__wrap}>
                            <span className={s.text} ref={el} />
                        </div>
                    </div>
                    <div>
                        {state ? <ButtonNext func={setVisibleHandler} /> : null}
                    </div>
                </div>
            </div>
            <div className={visible ? s.works__wrapper : `${s.works__wrapper} ${s.show}`}>
                <Works />
            </div>
        </div>
    );
}

