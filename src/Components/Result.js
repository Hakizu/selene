import React, {useEffect} from 'react'
import Weather from './Weather'
import Axios from 'axios'

const Result = 
({newSearch, setSearch, country, weather, setWeather, setIcon}) => {

    const result = !newSearch
        ? country
        : country.filter(c =>
            c.name.toLowerCase().includes(newSearch.toLowerCase()))

    const countryName = result.map(c => 
        <li key={c.numericCode}> {c.name} 
        </li>)

    const countryData = result.map(c => 
        <div>
        <ul key={c.altSpellings}> 
            Capital: {c.capital} 
        </ul>
        <ul key={c.nativeName}>
            Population: {c.population} 
        </ul>
        </div>
    )
    const countryLanguage = 
        <div>
        <h3>Languages</h3>
        <p>
        {result.map(r => 
            r.languages.map(l => 
            <li key={l.demonym}> {l.name}
            </li>))}
        </p>
        {result.map(f => 
                <img key={f.flag} src={f.flag} 
                    alt="Country flag" 
                    style={{width: 150}}>
                </img>
        )}
        </div>

    useEffect(() => {
        if (result.length ===1) {
        Axios
        .get("http://api.weatherstack.com/current?access_key="+ 
            process.env.REACT_APP_API_KEY + "&query=" + result[0].capital)
          .then((response) => {
            console.log(response);
            setWeather(response.data.current);
            setIcon(response.data.current.weather_icons);
          })
        }  
    }, [newSearch])

    if  (!newSearch) {
        return (
            <div>
            <h2>Countries</h2>
            {countryName}
            </div>
        )
    }
    if  (result.length === 1){
        return (
            <div>
            <h2>{result[0].name}</h2>
            {countryData}
            {countryLanguage}
            <Weather weather={weather}/>
            </div>
        )
    }

    const toggle = (value) => {
        return ev => 
        setSearch(value) 
    }

    if  (result.length < 10 || !newSearch) {
        return (
            <div>
            <h2>Countries</h2>
            {result.map(c => 
                <li key={c.alpha3Code}> {c.name}          
                <button onClick={toggle(c.name)}>
                Show
                </button> 
                </li>
            )}
            </div>
        )
    }
    if  (result.length > 10 && newSearch.length > 0) {
        return "Too many matches, specify another filter"
    }
    
}
export default Result