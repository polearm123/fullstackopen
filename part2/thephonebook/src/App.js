import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

    //setting all states that need to be monitored and retrieveds
    const [persons,setPersons] = useState([])

    const [newName,setName] = useState('')

    const [newNumber,setNumber] = useState('')
  
    const [newFilter,setFilter] = useState('')

    const [filteredList,setFilteredList] = useState([])

    //queries the json server if there is a valid response
    //prints promise fulfilled and changes the persons state
    //to the data returned in the response object.
    useEffect(() => {
      console.log("effect")
      axios
        .get('http://localhost:3050/persons')
        .then(response => {
          console.log("promise fulfilled")
          setPersons(response.data)
        })
    },[])
    
    //sets the currentName state from the name input box
    const setCurrentName = (event) => {
      console.log("name is:",event.target.value)
      setName(event.target.value)
    }

    //sets the currentNumber state retrieved from the number input box
    const setCurrentNumber = (event) => {
      setNumber(event.target.value)
    }


    //adds a new person to the phosne book if their name isn't already included
    //an alert is given to the user if the name is a copy
    const addNewPerson = (event) => {
      event.preventDefault()
      const found = persons.find(element => element.name === newName)
      if(!found){
        var newPerson = {name:newName,number:newNumber}
        console.log(persons)
        setPersons(persons.concat(newPerson))
        setNumber('')
        setName('')
      }else{
        alert(`${newName} is already in the phonebook`)
        setName('')
        setNumber('')
      }

    }


    //sets the filter used to present the user with people in the phonebook
    //matching the input in the filter input box
    const setCurrentFilter = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value)
      const newlyFilteredList = persons.filter((person)=>person.name.includes(newFilter))
      setFilteredList(newlyFilteredList)
    }

    return (
      <div>
        <h2>Phonebook</h2>
          <Filter newFilter={newFilter} setCurrentFilter={setCurrentFilter}/>
          
        <h2>add a new contact! </h2>
          <Form addNewPerson={addNewPerson} setCurrentName={setCurrentName} setCurrentNumber={setCurrentNumber} newName={newName} newNumber={newNumber}/>
        
        <h2>Numbers</h2>
          <PeopleList filteredList={filteredList}/>
      </div>
    )
  
}


//components to show a list of People in the phone book matching the current filter
const PeopleList = ({filteredList}) => {
  return (
    <ul>
      {
      filteredList.map((person)=>
        <Person key={person.name} name={person.name} number={person.number} />
      )}
    </ul>
  );
}


//form component for adding new phone contacts
const Form = ({addNewPerson,setCurrentName,setCurrentNumber,newName,newNumber}) => {
  return(
    <form onSubmit={addNewPerson}>

    <div>
      Name:<input value={newName} onChange={setCurrentName}/>
    </div>

    <div>
      Number:<input value={newNumber} onChange={setCurrentNumber}></input>
    </div>

    <div>
      <button type="submit">add</button>
    </div>

  </form>
  );
}


//filter component that handles the filter state which determines which
//numbers are output on the screen from the phonebook
const Filter = ({newFilter,setCurrentFilter}) => {
  return(
    <div>
            filter: <input value={newFilter} onChange={setCurrentFilter} />
    </div>
  );
}


//A person component to control how the contents of the person object 
//is presented to the user
const Person = ({number,name}) => {
  console.log(number)
  return (
    <div>
      <li>{name} : {number}</li>
    </div>
  );
}

export default App;
