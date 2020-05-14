import React from 'react'

const Header = ({name}) => {
    return (
        <h2>{name}</h2>
    )
}
    
const Part = ({name, exercises}) => {
    return (
        <p>
        {name} {exercises}
        </p>    
        )
}
        
const Total = ({course}) => {
    const total = course.map(course => course.exercises)
    return (
        <div>
            <strong>
                Total Number of exercises {total.reduce((acc, currentValue) => 
                currentValue + acc)}
            </strong>
        </div>
    )
}
  
const Content = ({course}) => {
    return (
        <div>
            {course.map(course =>
                <Part key={course.id} name={course.name} exercises={course.exercises}/>
            )}
            <Total course={course}/> 
        </div>
    )
}
        
const Course =({course}) => {
    return (   
        <div>
            <Header key={course.id} name={course.name}/>  
            <Content key={course.id} course={course.parts}/> 
        </div>
    ) 
}

export default Course