import React, {useState} from 'react'
import Filter from "./Components/Filter"
import Form from "./Components/Form"
import Result from "./Components/Result"

const App = () => {
    const [persons, setPersons] = useState([
        { name : 'Arto Hellas', number: '040-123456'},
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newNumber, setNewNumber] = useState('')
    const [newName, setNewName] = useState('')
    const [newSearch, setNewSearch] = useState("")

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