import React, {useState, useEffect} from 'react'
import Filter from "./Components/Filter"
import Form from "./Components/Form"
import Person from "./Components/Result"
import contactsServices from './server/contacts'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newNumber, setNewNumber] = useState('')
    const [newName, setNewName] = useState('')
    const [newSearch, setNewSearch] = useState("")

    const getData = () => {
        contactsServices
            .getAll()
            .then(response => {
                setPersons(response)
            })
    }
    useEffect(getData, [])


    const newPerson = (event) =>{
        event.preventDefault()
        const personObject = {
            name : newName,
            number : newNumber,
            id : persons.length + 1
        }
        const matches = persons.filter(p => 
            p.name === personObject.name)

        const existing = matches.length > 0 
            ? true
            : false

        if  (!existing) {
            contactsServices
                .create(personObject)
                .then(person => {
                    setPersons(persons.concat(person)) 
                    setNewName("")
                    setNewNumber("")
                })     
        }
        const updateMsg = `${personObject.name} already exists,do you want to update his Number with: ${personObject.number}?`
        if  (existing && window.confirm(updateMsg)) {
                contactsServices
                    .update(personObject, matches[0].id)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => 
                            p.id !== matches[0].id ? p : returnedPerson
                            ))
                        setNewName("")
                        setNewNumber("")
                    })
        }
    }
    const toggleRemove = (id) => {
        if (window.confirm(`Do you want to delete ${id[1]} ?`)) {
            contactsServices
                .doDelete(id[0])
                .then(setPersons(persons.filter(p =>
                    p.id !== id[0] 
                )))
        }
    }

    const result = !newSearch
        ? persons
        : persons.filter(p =>
            p.name.toLowerCase().includes(newSearch.toLowerCase()))    
    
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter setNewSearch={setNewSearch} newSearch={newSearch}/>
            <h2>Add new Contact</h2>
            <ul>
                {result.map((p, i) => 
                    <Person 
                        key = {i}
                        name = {p.name}
                        number = {p.number}
                        remove = {() => toggleRemove([p.id, p.name])}
                    />
                )}
            </ul>
            <Form newPerson={newPerson} newName={newName} setNewName={setNewName} 
                newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
        </div>
    )
}

export default App