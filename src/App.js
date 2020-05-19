import React, {useState, useEffect} from 'react'
import Filter from "./Components/Filter"
import Result from "./Components/Result"
import Axios from 'axios'

const App = () => {
    const [country, setCountries] = useState([])
    const [newSearch, setNewSearch] = useState("")
    const [weather, setWeather] = useState([])
    const [icon, setIcon] = useState([])
    const api = process.env.REACT_APP_API_KEY

    const hook = () => {
        Axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                setCountries(response.data)
            })
    }
    useEffect(hook, [])

    return (
        <div>
            <h2>List of countries</h2>
            <Filter setNewSearch={setNewSearch} newSearch={newSearch}/>
            <Result newSearch={newSearch} setSearch={setNewSearch} 
                country={country} weather={weather} setWeather={setWeather} setIcon={setIcon} api={api}/>
        </div>
    )
}

export default App