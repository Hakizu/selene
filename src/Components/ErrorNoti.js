import React from 'react'

const Warning = ({error}) => {
    if (error === null) {
        return null
    }
    return (
        <div className='error'>
            {error}
        </div>
    )
}
   
export default Warning
