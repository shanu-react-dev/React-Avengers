import React, { useEffect, useState } from "react";
import rainy from "./assets/rainyvideo.mp4";
import cloudy from "./assets/CloudyVideo.mp4";
import thunder from "./assets/Thunder.mp4";
import foggy from "./assets/FoggyVideo.mp4";

const ShowData = ({ data }) => {
  let [background, setBackground] = useState(null);

  useEffect(() => {
    if (data?.weather[0].main == "Clear") {
      return (document.body.style.background = "red");
    }
  }, [data?.weather[0].id]);

  const icon = data?.weather[0].icon;

  const timestamp = data?.dt * 1000;
  const date = new Date(timestamp);

  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();
  const suffix = (d) =>
    ["th", "st", "nd", "rd"][
      d % 10 > 3 || Math.floor((d % 100) / 10) == 1 ? 0 : d % 10
    ];

  const formatted = `${weekday} ${day}${suffix(day)} ${month} ${year}`;

  console.log(formatted);

  return (
    <div className="myWeatherDetails">
      <div className="detail">
        <div className="cityTemp">
          <h3>
            {data?.name} <span>{data?.main.temp}&deg; C</span>
          </h3>
        </div>

        <div className="dateTime">{formatted}</div>

        <div className="weatherIcon">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
          />
        </div>
      </div>

      <div className="weatherDetails">
        <div className="yesterday">YDay</div>
        <div className="today">Tday</div>
        <div className="tomorrow">Tom</div>
      </div>
    </div>
  );
};

export default ShowData;
