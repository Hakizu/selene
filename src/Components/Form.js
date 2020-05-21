import React from 'react'

const Form = ({newPerson, newName, setNewName, newNumber, setNewNumber}) => {
    // "abc".match(/[a-zA-Z]*/) => ist buchstabe
    // "123".match(/[0-9]*/) => ist zahl

    const handlePersonChange = (event) => {
        console.log(event.target.value)
        if ((isNaN(event.target.value)) || event.target.value === "")
        setNewName(event.target.value)
        } 
    const handleNumberChange = (event) => {
        if (!isNaN(parseInt(event.target.value)) || event.target.value === ""){
            setNewNumber(event.target.value)
        }
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