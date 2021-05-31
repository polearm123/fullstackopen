import React from 'react'

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20 
  const age = 22
  const name = "John Diggelby"

  console.log("hello from the app component")
  return (
  <div>
    <p>Hello world, it is now {now.toString()}</p>
    <p>

      {a} + {b} = {a+b}

    </p>
    <HelloWorld name = "Harry" age = {age}/>
    <HelloWorld name = "mr.John" age = {age+a} />
    <HelloWorld name = "mr.silly" age = {age+b} />
    <HelloWorld name = {name} age = {age+a+b} />
    
  </div>
  
  )
  }

const HelloWorld = (props) => {

  return (

    <div>
      <p>
        hello world! {props.name} is {props.age} years of age
      </p>
    </div>

  )

}



export default App
