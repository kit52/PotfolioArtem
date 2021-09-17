import { React, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import ButtonNext from "../button/ButtonNext";
import s from "./Typed.module.css"
export const TypedReactHooksDemo = () => {
    const el = useRef(null);
    const typed = useRef(null);
    const [state, setState] = useState(false);
    useEffect(() => {
        const options = {
            strings: [
                'Привет',
                'Рад тебя видеть',

            ],
            typeSpeed: 50,
            backSpeed: 50,
        };

        typed.current = new Typed(el.current, options);
        setTimeout(() => {
            setState(true)
        }, 5000);
        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div className={s.wrap}>
            <div className="type-wrap">
                <span ref={el} />
            </div>
            <div>
                {state ? <ButtonNext /> : null}
            </div>
        </div>
    );
}

