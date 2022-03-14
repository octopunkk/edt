import { useState, useEffect } from "react";
import "./css/weather-icons.css";

const openWeatherKey = "86600195581fa8929ed1e083375acef2";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
export function Weather(props) {
  const [weather, setWeather] = useState("");
  const [tmp, setTmp] = useState();
  const [tmp_feel, setTmp_feel] = useState();
  const [id, setId] = useState();
  const [code, setCode] = useState();

  useEffect(() => {
    const getForecast = async () => {
      const urlToFetch = `${weatherUrl}?q=bruxelles&APPID=${openWeatherKey}&lang=FR`;
      try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
          setWeather(jsonResponse.weather[0].description);
          setId(jsonResponse.weather[0].main);
          setCode(jsonResponse.weather[0].id);
          setTmp(jsonResponse.main.temp - 273, 15);
          setTmp_feel(jsonResponse.main.feels_like - 273, 15);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, []);

  const getIcon = () => {
    switch (id) {
      case "Thunderstorm":
        return "wi-thunderstorm";
      case "Drizzle":
        return "wi-sleet";
      case "Rain":
        return "wi-rain";
      case "Snow":
        return "wi-snow";
      case "Mist":
        return "wi-dust";
      case "Smoke":
        return "wi-smoke";
      case "Haze":
        return "wi-dust";
      case "Dust":
        return "wi-dust";
      case "Fog":
        return "wi-fog";
      case "Sand":
        return "wi-sandstorm";
      case "Ash":
        return "wi-volcano";
      case "Squall":
        return "wi-dust";
      case "Tornado":
        return "wi-tornado";
      case "Clear":
        return "wi-day-sunny";
      case "Clouds":
        if (code === 801) {
          return "wi-day-cloudy";
        }
        if (code === 802) {
          return "wi-cloud";
        }
        if (code === 803) {
          return "wi-cloudy";
        }
        if (code === 804) {
          return "wi-cloudy";
        }
        break;
      default:
        return "wi-day-sunny";
    }
  };
  return (
    <div className="clay weather">
      <h2>Météo en temps réel </h2>
      <div>
        <i class="wi wi-thermometer"></i>
        {"  "}
        {Math.round(tmp)}°C (ressenti : {Math.round(tmp_feel)}°C )
      </div>
      <p>
        {" "}
        <i class={`wi ${getIcon()}`}></i> {weather}
      </p>
    </div>
  );
}
