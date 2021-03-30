const initState = {
    location: [],
    currentWeather: [],
    timeZone: [],
    searched: [],
    forecast: [],
};

const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_WEATHER":
            return {
                ...state,
                location: action.payload.location,
                currentWeather: action.payload.currentWeather,
                // forecast: action.payload.forecast,
            };
        default:
            return { ...state };
    }
};

export default weatherReducer;
