import React, { useEffect, useState } from "react";
import "./Css/style.css";

const Temp = () => {
  const [cityName, setCityName] = useState("pune");
  const [minTemp, setMinTemp] = useState("0");
  const [maxTemp, setMaxTemp] = useState("0");
  const [state, setState] = useState("200");
  const [weatherCondition, setWeatherCondition] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const apiLink = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4b1c4a84cb02f3a631744114294319ab`;
      try {
        let apiData = await fetch(apiLink);
        setState(apiData.status);
        let fetchApiData = await apiData.json();
        setMinTemp(fetchApiData.main.temp_min);
        setMaxTemp(fetchApiData.main.temp_max);
        setWeatherCondition(fetchApiData.weather[0].description);
      } catch (error) {}
    };
    getData();
  }, [cityName]);

  return (
    <>
      <div className="Box">
        <div className="Box1">
          <h1>WeatherApp</h1>
          <div>
            <input
              placeholder="Enter The City Name"
              type="search"
              defaultValue=""
              onChange={(event) => {
                setCityName(event.target.value);
              }}
            />
          </div>
          {state === 404 || state === 400 ? (
            "No Data Found"
          ) : (
            <div>
              <h1>City Name = {cityName}</h1>
              <br />
              <h3>weather Condition = {weatherCondition}</h3>
              <br />
              <h4>
                `Min Temp : {minTemp} || Max Temp : {maxTemp}`
              </h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Temp;
