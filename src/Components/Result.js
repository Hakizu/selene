import React from 'react'

const Result = ({newSearch, setSearch, country}) => {
    
    const result = !newSearch
    ? country
    : country.filter(c =>
        c.name.toLowerCase().includes(newSearch.toLowerCase()))

    const countryName = result.map(c => 
        <li key={c.numericCode}> {c.name} 
        </li>)

    const countryData = result.map(c => 
        <div>
        <ul key={c.capital}> 
            Capital: {c.capital} 
        </ul>
        <ul key={c.population}>
            Population: {c.population} 
        </ul>
        </div>
    )
    const countryLanguage = 
        <div>
        <h3>Languages</h3>
        {result.map(r => 
            r.languages.map(l => 
            <li key={l.name}> {l.name}
            </li>))}
        {result.map(f => 
            <img key={f.flag} src={f.flag} alt="Country flag" style={{width: 150, height: 150}}>
            </img>
        )}
        </div>

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
            </div>
        )
    }

    const toggle = (value) => {
        return ev => setSearch(value)
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