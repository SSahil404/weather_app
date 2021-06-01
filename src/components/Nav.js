import React from "react";

const Nav = ({ setCityName, inputCity, setInputCity }) => {
    const inputCityHandler = (e) => {
        setInputCity(e.target.value);
    };
    const searchHandler = (e) => {
        e.preventDefault();
        setCityName(inputCity);
        localStorage.setItem("city", inputCity);
        setInputCity("");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <p className="navbar-brand">iWeather</p>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                Search a City&nbsp;
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <p className="nav-link disabled">An weather app for all</p>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        value={inputCity}
                        onChange={inputCityHandler}
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search City"
                        aria-label="Search"
                    />
                    <button
                        onClick={searchHandler}
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Nav;
