import s from "./Sun.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const Sun = ({ rising }) => (
  <div className={classNames(s.sun, rising ? s.sunrise : s.sunset)}>&nbsp;</div>
);

export default Sun;

Sun.propTypes = {
  rising: PropTypes.bool,
};
