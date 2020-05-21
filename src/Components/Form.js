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
        <table><tbody>
            <tr>
                <td>name:</td> 
                <td>
                <input
                    value = {newName}
                    onChange = {handlePersonChange}
                />
                </td>
            </tr>
            <tr>
                <td>number:</td>
                <td>
                <input 
                    value = {newNumber}
                    onChange = {handleNumberChange}
                />
                </td>
            </tr>
        </tbody></table>
        <button type="submit">add</button>
        </form>
    )
}
export default Form 