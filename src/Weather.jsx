import React, { useState } from "react";

const api = {
  key: "c186881ff48e9c98b6228cb7e9897cd6",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (evt) => {
    if (evt.key === "Enter") {
      await fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <main className="h-[100vh] w-full px-28 py-16 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-lg px-8 py-4 border border-black rounded-md bg-none bg-[#f7f7f7] shadow-md appearance-none transition ease-in-out duration-300 focus:bg-[#efefef]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      <div className="w-full mt-20 text-black">
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="">
              <h1 className="text-5xl font-bold">
                {weather.name}, {weather.sys.country}
              </h1>
              <h2 className="text-3xl font-semibold mt-1">{dateBuilder(new Date())}</h2>
            </div>
            <div className="mt-4">
              <h1 className="text-6xl font-extrabold">{Math.round(weather.main.temp)}°C</h1>
              <h2 className="text-4xl tracking-wide font-bold">{weather.weather[0].main}</h2>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
      <h1 className="absolute bottom-16 left-28 text-lg font-medium">Developed by <a href="https://www.sakshamtyagi.tech/" target="blank" className="font-bold underline">Saksham Tyagi</a></h1>
    </main>
  );
};

export default Weather;
