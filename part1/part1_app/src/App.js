import React from 'react'

function App() {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (

    <div>

      <Header course_name={course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>

    </div>
    
  );
}

function Header(props){

  console.log(props)

  return (

    <h1>{props.course}</h1>

  );

}

function Content(props){

    console.log(props)
  return (
    
    <div>
    <p>
      <Part exerciseName = {props.parts[0].name} numberOfExercises={props.parts[0].exercises}/>
    </p>
    <p>
      <Part exerciseName = {props.parts[1].name} numberOfExercises={props.parts[1].exercises}/>
    </p>
    <p>
      <Part exerciseName = {props.parts[2].name} numberOfExercises={props.parts[2].exercises}/>
    </p>
    </div>

  );

}


function Total(props){

  return (

    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  
    );

}


function Part(props){

  return (

    <p>{props.exerciseName} {props.numberOfExercises} </p>
  
    );

}

export default App;
