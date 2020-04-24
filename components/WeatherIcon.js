import Icon from "@mdi/react";
import {
  mdiWeatherPartlyCloudy,
  mdiWeatherPouring,
  mdiWeatherSunny,
} from "@mdi/js";
import PropTypes from "prop-types";

const WeatherIcon = ({ status }) => {
  const iconsMap = {
    clouds: <Icon size={0.8} path={mdiWeatherPartlyCloudy} title="Clouds" />,
    clear: <Icon size={0.8} path={mdiWeatherSunny} title="Sunny" />,
    rain: <Icon size={0.8} path={mdiWeatherPouring} title="Rain" />,
  };

  return <>{iconsMap[status]}</>;
};

export default WeatherIcon;

WeatherIcon.propTypes = {
  status: PropTypes.string,
};
