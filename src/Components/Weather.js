import React from 'react'

const Weather = ({weather}) => {
    return (
    <div>
        <h2>Current weather</h2>
        <div><img src={weather.weather_icons} alt="weather icon"></img></div>
        <div>Temperature:{weather.temperature}</div>
        <div>Windspeed: {weather.wind_speed}</div>
        <div>Wind direction:{weather.wind_dir}</div>
        <div>Humidity: {weather.humidity}</div>
        <div>Precipitation: {weather.precip}</div>
    </div>
    )
}
export default Weather