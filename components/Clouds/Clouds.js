import s from './Clouds.scss';
import classNames from 'classnames';

const Clouds = () => {
    return (
        <div className={s.clouds}>
           <Cloud />
           <Cloud />
           <Cloud />
           <Cloud />
           <Cloud />
           <Cloud />
           <Cloud />
        </div>
    )
}

const Cloud = () => {
    return (
        <div className={s.cloudWrap}>
            <div className={classNames(s.baseCloud, s.cloud)}></div>
            <div className={classNames(s.bigCloud, s.cloud)}></div>
            <div className={classNames(s.smallCloud, s.cloud)}></div>
        </div>
    )
}

export default Clouds;