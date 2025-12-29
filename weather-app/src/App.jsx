import React, { useEffect, useState } from "react";
import ShowData from "./ShowData";
import "./index.css";

const App = () => {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);
  const apiKey = "72a77361a1ade10af844d73003d8a8e7";

  const fetchWeather = async (e) => {
    let weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    let finalData = await weather.json();
    setWeatherData(finalData);
    console.log(finalData);
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handleSearch = (e) => {
    e.preventDefault();
    console.log(city);
    fetchWeather();
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form">
      <form>
        <div className="formdata">
          <h1>Weather Application</h1>
          <div className="formElem">
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
              placeholder="Enter city Name"
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <ShowData data={weatherData} />
      </form>
    </div>
  );
};

export default App;
