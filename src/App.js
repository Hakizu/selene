import React, {useState, useEffect} from 'react'
import Filter from "./Components/Filter"
import Form from "./Components/Form"
import Result from "./Components/Result"
import Axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newNumber, setNewNumber] = useState('')
    const [newName, setNewName] = useState('')
    const [newSearch, setNewSearch] = useState("")

    const hook = () => {
        Axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                setPersons(response.data)
            })
    }
    useEffect(hook, [])

    const newPerson = (event) =>{
        event.preventDefault()
        const personObject = {
            name : newName,
            number : newNumber
        }
        const exists = persons.map(p => p.name.includes(newName))

        exists.includes(true)
        ? alert(`${newName} is already added to the phonebook`)
        : setPersons(persons.concat(personObject))

        setNewName("")
        setNewNumber("") 
    }  

    return (
        <div>
            <h2>List of countries</h2>
            <Filter setNewSearch={setNewSearch} newSearch={newSearch}/>
            {/*<h2>Add new Contact</h2>
            <Form newPerson={newPerson} newName={newName} setNewName={setNewName} 
                newNumber={newNumber} setNewNumber={setNewNumber} /> */}
            <Result newSearch={newSearch} persons={persons} />
        </div>
    )
}

export default App