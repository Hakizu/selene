import React, {useState} from 'react'

const Name =({persons}) => {
    return (
        <li>{persons}</li>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { name : 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const newPerson = (event) =>{
        event.preventDefault()
        const personObject = {
            name : newName
        }
        const exists = persons.map(p => p.name.includes(newName))

        exists.includes(true)
        ? alert(`${newName} is already added to the phonebook`)
        : setPersons(persons.concat(personObject))

        setNewName("")
        
    }
    const handleInputChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={newPerson}>
                <div>
                    <input
                        value = {newName}
                        onChange = {handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(persons => 
            <Name key={persons.name} persons={persons.name}/>
            )}
        </div>
    )
}

export default App