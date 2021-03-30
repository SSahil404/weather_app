import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWeather } from "../actions/weatherAction";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadWeather());
    }, [dispatch]);
    //getting the data
    const { location, currentWeather } = useSelector((state) => state.weather);
    const dayTimeBGHandler = () => {
        document.body.style.background = "darkgrey";
    };
    return (
        <div className="weatherReport">
            <div className="locationReport">
                <h2>
                    Current Weather in {location.name}, {location.region},{" "}
                    {location.country}
                </h2>
                <h2>TimeZone {location.tz_id}</h2>
                <h2>Time {location.localtime}</h2>
            </div>
            <div className="weather">
                <h2>{currentWeather.temp_c}℃</h2>
                <h4>Last Updated {currentWeather.last_updated}</h4>
                {currentWeather.is_day === 0 && dayTimeBGHandler()}
            </div>
        </div>
    );
};

export default Home;
