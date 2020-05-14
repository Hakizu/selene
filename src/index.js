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
      Total Number of exercises {total.reduce((acc, currentValue) => 
        currentValue + acc)}
    </div>
  )
}

const Content = ({ course }) => {
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
      <Header name={course.name}/>
      <Content course={course.parts} />
    </div>
  ) 
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }
  return <Course course={course} />
}
ReactDOM.render(<App />, document.getElementById('root'))
