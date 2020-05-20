import React, {useState, useEffect} from 'react'
import Filter from "./Components/Filter"
import Form from "./Components/Form"
import Result from "./Components/Result"
import contactsServices from './server/contacts'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newNumber, setNewNumber] = useState('')
    const [newName, setNewName] = useState('')
    const [newSearch, setNewSearch] = useState("")

    useEffect (() => {
        contactsServices
            .getAll()
            .then(response => {
                setPersons(response)
            })
    }, [])


    const newPerson = (event) =>{
        event.preventDefault()
        const personObject = {
            name : newName,
            number : newNumber,
            id : persons.length + 1
        }
        contactsServices
            .create(personObject)
            .then(person => {
                setPersons(persons.concat(person)) 
                setNewName("")
                setNewNumber("")
            })       
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter setNewSearch={setNewSearch} newSearch={newSearch}/>
            <h2>Add new Contact</h2>
            <Form newPerson={newPerson} newName={newName} setNewName={setNewName} 
                newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
            <Result newSearch={newSearch} persons={persons} />
        </div>
    )
}

export default App