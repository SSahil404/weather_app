import React, { useEffect, useState } from "react";
import axios from "axios";
import { forecastURL } from "../api";

const Weather = ({ cityName }) => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState([]);
    const [weatherCondition, setWeatherCondition] = useState([]);
    const [astro, setAstro] = useState("");
    const [forecast, setForecast] = useState("");

    const [tempUnit, setTempUnit] = useState(false);
    const [cityFound, setCityFound] = useState(false);

    useEffect(() => {
        const data = axios.get(forecastURL(cityName));
        data.then((response) => {
            console.log(response);
            setWeather(response.data.current);
            setWeatherCondition(response.data.current.condition);
            setLocation(response.data.location);
            setAstro(response.data.forecast.forecastday[0].astro);
            setForecast(response.data.forecast.forecastday[0].day);
            setCityFound(true);
        }).catch(() => {
            setCityFound(false);
        });
    }, [cityName]);
    return (
        <>
            {cityFound || (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>City Not Found!</strong> Please Enter the city name again.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
            <div className="weatherDetails">
                <div className="container my-5">
                    <div className="d-flex my-3 align-items-center justify-content-between">
                        <div className="row d-flex my-3 align-items-center">
                            <h3 className="col-sm">Weather in</h3>
                            <div className="col">
                                <h1>
                                    {location.name}, {location.region}
                                </h1>
                                <h5>({location.country})</h5>
                            </div>
                        </div>
                        <div className="location mx-5">
                            <h1
                                onClick={() => setTempUnit(!tempUnit)}
                                className="display-4 text-danger cursor-pointer"
                            >
                                {!tempUnit && weather.temp_c}
                                {!tempUnit && "℃"}
                                {tempUnit && weather.temp_f}
                                {tempUnit && "℉"}
                            </h1>

                            <div className="condition">
                                <img src={weatherCondition.icon} alt="icon" />
                                <h3>{weatherCondition.text}</h3>
                            </div>
                        </div>
                    </div>
                    <h2>{location.localtime}</h2>
                    <h4>({location.tz_id})</h4>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-around">
                        <p>Avg. Humidity {forecast.avghumidity}</p>
                        <p>Avg. Temperature {forecast.avgtemp_c}℃</p>
                    </div>
                    <div className="d-flex justify-content-around">
                        <p>Max Temperature {forecast.maxtemp_c}℃</p>
                        <p>Min Temperature {forecast.mintemp_c}℃</p>
                    </div>
                    <div className="d-flex justify-content-around">
                        <p>Chance of Rain {forecast.daily_chance_of_rain}%</p>
                        <p>Chance of Snow {forecast.daily_chance_of_snow}%</p>
                    </div>

                    <hr className="my-4" />
                    <div className="astro">
                        <div className="d-flex justify-content-around">
                            <p>Sunrise {astro.sunrise}</p>
                            <p>Sunset {astro.sunset}</p>
                        </div>
                        <div className="d-flex justify-content-around">
                            <p>Moonrise {astro.moonrise}</p>
                            <p>Moonset {astro.moonset}</p>
                        </div>
                        <p align="center">Moon Phase: {astro.moon_phase}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Weather;
