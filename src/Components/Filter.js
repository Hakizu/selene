import React from 'react'

const Filter = ({setNewSearch, newSearch}) => {
    const search = (event) => setNewSearch(event.target.value)
    return (
        <div>
            Filter for:
            <input
                onChange={search}
                value = {newSearch}
            />
        </div>
    )
}
export default Filter