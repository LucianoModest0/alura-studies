import Button from "../Button";
import Clock from "./Clock";
import style from './timer.module.scss'

export default function Timer(){
    return (
        <div className={style.timer}>
            <p className={style.title}>Pick a card and start the timer</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>
                start!
            </Button>

        </div>
    )
}