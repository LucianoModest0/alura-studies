import React from "react";
import style from './clock.module.scss';

export default function Clock() {
    return (
        < >
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
        </ >
    )
}