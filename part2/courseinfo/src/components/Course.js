import React from 'react'


const Course = ({course}) => {
    return (
      
      <div>
        
        <Header course={course.name} />
        
        <Content parts={course.parts}/>
        
        <Total parts={course.parts}/> 
      </div>
    );
  
  }
  

  const Header = ({course}) => {
    return(
  
      <h3>{course}</h3>
  
    );
  }
  

  const Content = ({parts}) => {
  
    return(
      <div>
      {parts.map((part)=>
        <Part key={part.id} part={part.name} exercises={part.exercises}/>
      )}
  
      </div>
    );
  
  }
  

  const Part = ({part,exercises}) => {
    return (
      <p>{part} : {exercises} </p>
    );
  }
  

  const Total = ({parts}) => {
    console.log("inside total",parts)
    var totalSum = parts.reduce((previous,current)=>{
  
      return previous+current.exercises
  
    },0)
  
    
    return(
      
      <div>
        <h3>total: {totalSum}</h3>
        
      </div>
      
    );
  
  
  }

  
  export default Course