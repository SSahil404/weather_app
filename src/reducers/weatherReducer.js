const initState = {
    searched: [],
    currentWeather: [],
    forecast: [],
    history: [],
    timeZone: [],
};

const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_WEATHER":
            return { ...state };
        default:
            return { ...state };
    }
};

export default weatherReducer;
