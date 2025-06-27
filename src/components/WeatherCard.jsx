import React, { useState } from "react";

function formatTime(ts, tz) {
  const date = new Date((ts + tz) * 1000);
  let h = date.getUTCHours(), m = date.getUTCMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m.toString().padStart(2, "0")} ${ampm}`;
}

export default function WeatherCard({ weather, onClose }) {
  const [unit, setUnit] = useState("C");
  const temp = unit === "C" ? weather.main.temp : (weather.main.temp * 9/5 + 32);
  const feels = unit === "C" ? weather.main.feels_like : (weather.main.feels_like * 9/5 + 32);

  return (
    <div
      className="card shadow-lg mx-auto mt-3"
      style={{
        borderRadius: "1.2rem",
        background: "rgba(255,255,255,0.92)",
        maxWidth: 400,
      }}
    >
      <button
        className="btn-close position-absolute end-0 top-0 m-2"
        onClick={onClose}
        aria-label="Close"
        style={{ zIndex: 2 }}
      />
      <div className="card-body text-center px-3 px-sm-4">
        <img
          src="/media/weathericon.svg"
          alt="icon"
          style={{ width: 64, height: 64 }}
          className="mb-2 mx-auto d-block"
        />
        <h3 className="card-title fs-5 fw-semibold mb-2">
          {weather.city}, {weather.country}
        </h3>
        <div className="d-flex justify-content-center align-items-center mb-2">
          <span className="display-5 fw-bold" style={{ fontSize: "2.5rem" }}>
            {Math.round(temp)}°{unit}
          </span>
          <button
            className="btn btn-outline-primary btn-sm rounded-circle ms-3"
            onClick={() => setUnit(unit === "C" ? "F" : "C")}
            style={{
              width: 40,
              height: 40,
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title="Toggle °C/°F"
          >
            {unit === "C" ? "°F" : "°C"}
          </button>
        </div>
        <div className="mb-2 small">
          <span className="me-3">
            Feels like: <b>{Math.round(feels)}°{unit}</b>
          </span>
          <span>
            Humidity: <b>{weather.main.humidity}%</b>
          </span>
        </div>
        <div className="row mt-3 g-2">
          <div className="col-6">
            <div className="bg-light rounded py-2">
              <small className="text-muted">Sunrise</small>
              <div className="fw-semibold">
                {formatTime(weather.sys.sunrise, weather.timezone)}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="bg-light rounded py-2">
              <small className="text-muted">Sunset</small>
              <div className="fw-semibold">
                {formatTime(weather.sys.sunset, weather.timezone)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}