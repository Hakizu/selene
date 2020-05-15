import React, {useState} from 'react'

const Name =({persons, number}) => {
    return (
        <li>{persons}  {number}</li>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { name : 'Arto Hellas', number: '040-123456'}
    ])
    const [newNumber, setNewNumber] = useState('')
    const [newName, setNewName] = useState('')

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
    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={newPerson}>
                <div>
                    name: 
                    <input
                        value = {newName}
                        onChange = {handlePersonChange}
                    />
                </div>
                <div>
                    number:
                    <input 
                        value = {newNumber}
                        onChange = {handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(persons => 
            <Name key={persons.name} persons={persons.name} number={persons.number}/>
            )}
        </div>
    )
}

export default App