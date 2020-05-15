import React, {useState} from 'react'

const Name =({persons, number}) => {
    return (
        <li>{persons}  {number}</li>
    )
}

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
    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const search = (event) => {
        setNewSearch(event.target.value)
    }    
    const result = !newSearch
    ? persons
    : persons.filter(p =>
        p.name.toLowerCase().includes(newSearch.toLowerCase()))


    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter for:
                <input
                onChange={search}
                value = {newSearch}
                />
            </div>
            <h2>Add new Contact</h2>
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
            {result.map(persons => 
            <Name key={persons.name} persons={persons.name} number={persons.number}/>
            )}
        </div>
    )
}

export default App