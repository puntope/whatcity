import fetch from "node-fetch";
import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import Cities from "../components/Cities";
import Clouds from "../components/Clouds/Clouds";
import s from "../scss/styles.scss";
import Sun from "../components/Sun/Sun";
import Rain from "../components/Rain/Rain";
import Averages from "../components/Averages/Averages";
import { GitHub } from "@material-ui/icons";
import Link from "@material-ui/core/Link";

const Index = () => {
  const [cities, setCities] = useState(process.env.cities);
  const [sky, setSky] = useState({ r: 170, g: 230, b: 255, cloudy: false });
  const [weather, setWeather] = useState({
    rain: Math.random() >= 0.5,
    sunny: true,
  });
  const [active, setActive] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setSky((oldSky) => ({
        r: oldSky.cloudy
          ? oldSky.r > 0
            ? --oldSky.r
            : oldSky.r
          : oldSky.r < 170
          ? ++oldSky.r
          : oldSky.r,
        g: oldSky.cloudy
          ? oldSky.g > 0
            ? oldSky.g - 1.3
            : oldSky.g
          : oldSky.g < 230
          ? oldSky.g + 1.3
          : oldSky.g,
        b: oldSky.cloudy
          ? oldSky.b > 0
            ? oldSky.b - 1.4
            : oldSky.b
          : oldSky.b < 255
          ? oldSky.b + 1.4
          : oldSky.b,
        cloudy: oldSky.cloudy,
      }));
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      await fetchCities(process.env.cities, setCities);
    }

    fetchData();
  }, []);

  return (
    <Box component="main">
      <Box style={getSkyBackground(sky)} className={s.sky} />

      <Link className={s.link} href={process.env.repository}>
        <GitHub />
        GitHub
      </Link>
      <Box className={s.root} component="div">
        <Rain isRaining={weather.rain} />
        <Sun rising={weather.sunny} />

        <Hero
          title="Hello Jamie"
          body="We know that you're going back to the office soon. We created this little
                    app to help you choose between our three offices."
        />
        <Cities
          cities={cities}
          active={active}
          onChangeCity={(city) =>
            changeCity(city, sky, setSky, setActive, setWeather)
          }
        />
      </Box>

      <Clouds />
      <Averages cities={cities} />
    </Box>
  );
};

const changeCity = (city, sky, setSky, setActive, setWeather) => {
  setActive(city.code);

  let status = city.weather.status.toLowerCase();
  console.log(`status ${status}`);

  if (status === "clouds" || status === "drizzle") {
    setSky({ ...sky, cloudy: true });
    setWeather({ sunny: false, rain: false });
  }

  if (status === "clear") {
    setSky({ ...sky, cloudy: false });
    setWeather({ sunny: true, rain: false });
  }

  if (status === "rain") {
    setSky({ ...sky, cloudy: true });
    setWeather({ sunny: false, rain: true });
  }
};

const getSkyBackground = (sky) => {
  return {
    background: `linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(${sky.r},${sky.g},${sky.b},1) 100%)`,
  };
};

const fetchCities = async (cities, setCities) => {
  if (!process.env.apiActive) {
    return cities;
  }

  const weather = process.env.weather;

  for (let key in cities) {
    let city = { ...cities[key] };

    try {
      let apiWeather = getEndpoint(weather, {
        id: city.id,
        units: "metric",
        appid: weather.apiKey,
      });

      let dataWeather = await doApiRequest(apiWeather);
      city.weather = {
        temperature: Math.round(dataWeather.main.temp),
        status: dataWeather.weather[0].main,
      };
    } catch (e) {
      console.error("Weather Api error");
      let avgWeather = Math.round(city.weatherAvg[new Date().getMonth()]);
      city.weather = {
        temperature: avgWeather,
        status: avgWeather > 15 ? "clear" : "clouds",
      };
    }

    cities[key] = city;
    setCities(cities);
  }
};

async function doApiRequest(request) {
  let response = await fetch(request);
  return await response.json();
}

const getEndpoint = (api, params) => {
  const urlParams = new URLSearchParams(Object.entries(params));
  return `${api.url}?${urlParams}`;
};

export default Index;
