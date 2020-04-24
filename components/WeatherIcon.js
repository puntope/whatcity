import Icon from "@mdi/react";
import {
  mdiWeatherPartlyCloudy,
  mdiWeatherPouring,
  mdiWeatherSunny,
} from "@mdi/js";
import React from "react";

const WeatherIcon = ({ status }) => {
  const iconsMap = {
    clouds: <Icon size={0.8} path={mdiWeatherPartlyCloudy} title="Clouds" />,
    clear: <Icon size={0.8} path={mdiWeatherSunny} title="Sunny" />,
    rain: <Icon size={0.8} path={mdiWeatherPouring} title="Rain" />,
  };

  return <React.Fragment>{iconsMap[status]}</React.Fragment>;
};

export default WeatherIcon;
