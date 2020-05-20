import React from 'react'

const Person = ({name, number, remove}) => {
    return (
    	<li>
            {name} : {number}
            <button onClick={remove}>Delete Entry</button>
        </li>
    )
}
export default Person