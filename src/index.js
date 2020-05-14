import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
  <div>
    {courses.map(courses =>
      <Course key={courses.id} course={courses} />  
    )}
  </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
