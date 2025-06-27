import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const apiKey = "545d49923ad20e367d9769e581532b50";

export default function Search({ setWeather }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const fetchSuggestions = async () => {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;
      const { data } = await axios.get(url);
      setSuggestions(data);
    };
    fetchSuggestions();
  }, [query]);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSelect = async (city) => {
    setSuggestions([]);
    setQuery("");
    inputRef.current.blur();
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`;
    const { data } = await axios.get(weatherUrl);
    setWeather({ ...data, city: city.name, country: city.country });
  };

  return (
    <div className="position-relative mb-4">
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Search city..."
          value={query}
          onChange={handleInput}
        />
        {query && (
          <button
            className="btn btn-outline-secondary position-absolute end-0 top-50 translate-middle-y"
            style={{ border: "none", background: "transparent", zIndex: 2 }}
            onClick={() => {
              setQuery("");
              setSuggestions([]);
              inputRef.current.focus();
            }}
            tabIndex={-1}
            type="button"
            aria-label="Clear"
          >
            &times;
          </button>
        )}
      </div>
      {suggestions.length > 0 && (
        <ul
          className="list-group position-absolute w-100 shadow"
          style={{
            zIndex: 10,
            maxHeight: 200,
            overflowY: "auto",
            top: "100%",
            left: 0,
          }}
        >
          {suggestions.map((city, i) => (
            <li
              key={i}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelect(city)}
            >
              {city.name}, {city.state ? city.state + ", " : ""}
              {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}