import React from 'react'

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = ({course}) => {
  return(

    <p>{course}</p>

  );
}

const Content = ({part1,part2,part3,exercises1,exercises2,exercises3}) => {

  return(
    <div>
    <Part part={part1} exercises={exercises1} />
    <Part part={part2} exercises={exercises2} />
    <Part part={part3} exercises={exercises3} />
    </div>
  );

}

const Part = ({part,exercises}) => {
  return (
    <p>{part} : {exercises} </p>
  );
}

const Total = ({total}) => {

  return(
    <h1>total: {total}</h1>
  );


}

export default App