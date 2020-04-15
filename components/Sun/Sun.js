import s from './Sun.scss';
import * as classnames from "classnames";

const Sun = ({rising}) => (
    <div className={classnames(s.sun, rising ? s.sunrise : s.sunset)}></div>
)


export default Sun;