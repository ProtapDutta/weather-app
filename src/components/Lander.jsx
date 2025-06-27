import React, { useState } from "react";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import "../styles/Lander.css";

export default function Lander() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="lander-bg">
      <video
        className="lander-video"
        src="/media/cloudsflow.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="lander-overlay d-flex flex-column align-items-center justify-content-start min-vh-100 pt-5">
        <div className="w-100" style={{ maxWidth: 400 }}>
          <h1 className="text-center text-white mb-2 fw-bold fs-3">Weather App</h1>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <span className="text-white-50 me-2 small">Powered by OpenWeather</span>
            <img
              src="/media/images.webp"
              alt="OpenWeather"
              style={{ width: 35, height: 35, verticalAlign: "middle" }}
            />
          </div>
          <Search setWeather={setWeather} />
          {weather && (
            <WeatherCard weather={weather} onClose={() => setWeather(null)} />
          )}
        </div>
      </div>
    </div>
  );
}