import React from 'react'

const Form = ({newPerson, newName, setNewName, newNumber, setNewNumber}) =>{

    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return(
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
    )
}
export default Form 