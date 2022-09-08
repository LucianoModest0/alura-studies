import React from "react";
import style from './clock.module.scss';

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [tenMin, unitMin] = String(minutes).padStart(2, '0');
    const [tenSec, unitSec] = String(seconds).padStart(2, '0');
    return (
        < >
            <span className={style.clockNumber}>{tenMin}</span>
            <span className={style.clockNumber}>{unitMin}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{tenSec}</span>
            <span className={style.clockNumber}>{unitSec}</span>
        </ >
    )
}