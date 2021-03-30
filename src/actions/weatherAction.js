import axios from "axios";
import { currentWeatherURL } from "../api";

//action creator
export const loadWeather = () => async (dispatch) => {
    const currentWeatherData = await axios.get(currentWeatherURL());
    // const forecastData = await axios.get(forecastURL());

    dispatch({
        type: "FETCH_WEATHER",
        payload: {
            location: currentWeatherData.data.location,
            currentWeather: currentWeatherData.data.current,
            // forecast: forecastData,
        },
    });
};
