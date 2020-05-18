import React from 'react'

const Result = ({newSearch, country}) => {
    
    const result = !newSearch
    ? country
    : country.filter(c =>
        c.name.toLowerCase().includes(newSearch.toLowerCase()))

    if (result.length === 1){
        return (
            <>
            <h2>{result[0].name}</h2>
            <p> 
            Capital: {result[0].capital} <br></br>
            Population: {result[0].population} <br></br>
            </p>
            <h3>Languages:</h3>
            <p>
            {result[0].languages.map(l => 
                <li key={l.name}> {l.name}</li>)} 
            </p>
            <img src={result[0].flag} alt="Country flag" style={{width: 150, height: 150}}></img>
            </>
        )
    }
    if (result.length < 10 || !newSearch) {
        return (
            <div>
            <h2>Countries</h2>
            {result.map(c => 
                <li key={c.name}> {c.name} {c.number} </li>)}
                </div>
            )
    }
    if (result.length > 10 && newSearch.length > 0) {
        return "Too many matches, specify another filter"
    }
    console.log(result)

}
export default Result