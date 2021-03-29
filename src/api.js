const key = "c3b47e9dbcdd4921b6d54727212903";
const location = "India";

//base url
const base_url = "https://api.weatherapi.com/v1/";

//current weather
const current_weather = `current.json?key=${key}&q=${location}`;

//forecast
const forecast = `forecast.json?key=${key}&q=${location}&days=7`;
//URLs
export const currentWeatherURL = () => `${base_url}${current_weather}`;
export const forecastURL = () => `${base_url}${forecast}`;

// console.log(forecastURL());
