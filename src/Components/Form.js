import React from 'react'

const Form = ({newPerson, newName, setNewName, newNumber, setNewNumber}) => {
    // "abc".match(/[a-zA-Z]*/) => ist buchstabe
    // "123".match(/[0-9]*/) => ist zahl

    const handlePersonChange = (event) => 
        setNewName(event.target.value.replace(/[^a-zA-Z\s]/g, ""))
        
    const handleNumberChange = (input) => 
        setNewNumber(input.replace(/[^0-9]/g, ""))

    return(
        <form onSubmit={newPerson}>
        <table><tbody>
            <tr>
                <td>name:</td> 
                <td>
                <input
                    value={newName}
                    onChange={handlePersonChange}
                />
                </td>
            </tr>
            <tr>
                <td>number:</td>
                <td>
                <input 
                    value={newNumber}
                    onChange={ev => handleNumberChange(ev.target.value)}
                />
                </td>
            </tr>
        </tbody></table>
        <button type="submit">add</button>
        </form>
    )
}
export default Form 