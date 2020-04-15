import s from './Rain.scss'
import * as classnames from "classnames";

const Rain = ({isRaining}) => {

    return <div className={s.rain}>
        {
            isRaining &&
            new Array(10).fill(1).map((value, index) => {
                let randPosition = Math.floor(Math.random() * 20);
                let randDelay = Math.floor(Math.random() * 9);
                return (
                    <div
                        style={{
                            animationDelay: (randDelay*0.1) + 's',
                            left: (randPosition*10) + '%'
                        }}
                        className={s.drop}></div>
                )
            })

        }
    </div>

}

export default Rain;