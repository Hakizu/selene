import React from 'react'

const Result = ({newSearch, persons}) => {
    const result = !newSearch
    ? persons
    : persons.filter(p =>
        p.name.toLowerCase().includes(newSearch.toLowerCase()))
    
    return (
        <div>
            {result.map(persons => 
            <li key={persons.name}>{persons.name} {persons.number} </li>)}
        </div>
    )
}
export default Result