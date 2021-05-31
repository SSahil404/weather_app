import React, { useState } from "react";

//Components
import Nav from "./components/Nav";
import Weather from "./components/Weather";

import "./index.css";

function App() {
    const [cityName, setCityName] = useState("Guwahati, Assam");
    const [inputCity, setInputCity] = useState("");
    return (
        <div className="App">
            <Nav setCityName={setCityName} inputCity={inputCity} setInputCity={setInputCity} />
            <Weather cityName={cityName} />
        </div>
    );
}

export default App;
