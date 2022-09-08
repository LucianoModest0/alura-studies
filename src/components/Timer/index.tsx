import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from './timer.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    selected: ITask | undefined;
    endTask: () => void
}

export default function Timer({selected, endTask}: Props){
    const [ time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    },[selected])

    function regressive(count: number = 0){
        setTimeout(() => {
            if(count > 0) {
                setTime(count - 1);
                return regressive(count - 1);
            }
            endTask();
        }, 1000)
    }
    
    return (
        <div className={style.timer}>
            <p className={style.title}>Pick a card and start the timer</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressive(time)} >
                start!
            </Button>

        </div>
    )
}