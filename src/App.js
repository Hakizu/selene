import React, {useState, useEffect} from 'react'
import Filter from "./Components/Filter"
import Form from "./Components/Form"
import Person from "./Components/Result"
import contactsServices from './server/contacts'
import Notification from './Components/SuccessNoti'
import Warning from './Components/ErrorNoti'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newNumber, setNewNumber] = useState('')
    const [newName, setNewName] = useState('')
    const [newSearch, setNewSearch] = useState("")
    const [msg, setMsg] = useState(null)
    const [failure, setFailure] = useState(null)

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
                    setMsg(`${personObject.name} was added to the Phonebook`)
                    setTimeout(() => {
                        setMsg(null)
                    }, 5000)
                }) 
        }
        const updateMsg = `${personObject.name} already exists,`
            + `do you want to update his Number with: ${personObject.number}?`

        if  (existing && window.confirm(updateMsg)) {
                contactsServices
                    .update(personObject, matches[0].id)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => 
                            p.id !== matches[0].id ? p : returnedPerson
                            ))
                        setNewName("")
                        setNewNumber("")
                        setMsg(`${personObject.name} phone number was updated`)
                        setTimeout(() => {
                            setMsg(null)
                        }, 5000)
                    })
                    .catch(error => {
                        setFailure(`${matches[0].name} was already removed from server`)
                        setTimeout(() => { 
                            setFailure(null)
                        }, 5000)
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
                .catch(error => {
                    setFailure(`${id[1]} was already removed from server`)
                    setTimeout(() => { 
                        setFailure(null)
                    }, 5000)
                })    
        }
    }

    const result = !newSearch
        ? persons
        : persons.filter(p =>
            p.name.toLowerCase().includes(newSearch.toLowerCase()))    
    
    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={msg}/>
            <Warning error={failure} />
            <Filter setNewSearch={setNewSearch} newSearch={newSearch}/>
            <h2>Contacts</h2>
            <table><tbody>
                {result.map((p, i) => 
                    <Person 
                        key = {i}
                        name = {p.name}
                        number = {p.number}
                        remove = {() => toggleRemove([p.id, p.name])}
                    />
                )}
            </tbody></table>
            <h2>Add new Contact</h2>
            <Form newPerson={newPerson} newName={newName} setNewName={setNewName} 
                newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
        </div>
    )
}

export default App