const key = "c3b47e9dbcdd4921b6d54727212903";

const base_url = "http://api.weatherapi.com/v1/";

export const forecastURL = (cityName) =>
    `${base_url}forecast.json?key=${key}&q=${cityName}&days=1&aqi=yes&alerts=yes`;

// console.log(forecastURL("Delhi"));
