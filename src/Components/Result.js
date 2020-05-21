import React from 'react'

const Person = ({name, number, remove}) => {
    return (
    	<tr>
            <td>{name} </td>
            <td className="number">
                {number}
            </td>
            <td><button onClick={remove}>Delete Entry</button> </td>
        </tr>
    )
}
export default Person