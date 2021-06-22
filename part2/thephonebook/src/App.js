import React, { useState, useEffect } from 'react'
import phonebook from './services/phonebook'
import phonebookServices from './services/phonebook'


function App() {

    //setting all states that need to be monitored and retrieveds
    const [persons,setPersons] = useState([])

    const [newName,setName] = useState('')

    const [newNumber,setNumber] = useState('')
  
    const [newFilter,setFilter] = useState('')

    const [filteredList,setFilteredList] = useState([])

    const [errorMessage,setErroMessage]=useState('no error message')

    //queries the json server if there is a valid response
    //prints promise fulfilled and changes the persons state
    //to the data returned in the response object.
    console.log("hello")

    useEffect(() => {
      console.log("inside use effect")
      phonebookServices.getAll()
        .then(resultPersons => {
          console.log("promise fulfilled")
          setPersons(resultPersons)
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

    const showErrorMessage = (message) => {
      
      setErroMessage(message)
      setTimeout(() => {
        setErroMessage(null)
      },5000)

    }

    const deleteSelectedPerson = (person) => {
      const id = person._id
      const result = window.confirm(`Delete ${person.name}?`)
      console.log("inside delete selected")
      console.log("id is:", id)
      if(result)
      {      
        phonebookServices.deletePerson(id).then(deleteResponse => {console.log(deleteResponse)})
        setName('')
        setNumber('')
      }   

    }
    
    //adds a new person to the phosne book if their name isn't already included
    //an alert is given to the user if the name is a copy
    const addNewPerson = (event) => {
      event.preventDefault()
      // console.log(`new name is ${newName}`)
      // console.log(`new number is ${newNumber}`)
      const found = persons.find(element => element.name === newName)
      console.log("match found" , found)

      //if the name is found a confirmation is asked then the person
      //with that name in the database is altered
      //to have the number given in the form
      if(found && newName){
        console.log("inside all the things")
        const updatePerson = {...found,name:newName,number:newNumber}
        console.log(updatePerson)
        return phonebookServices.updatePerson(updatePerson)
        
      }

      var newPerson = {name:newName,number:newNumber}

      
        // setPersons(persons.concat(newPerson))
        phonebookServices.create(newPerson).then(putResponse => {
          showErrorMessage("person has been successfully added")
          return
        }).catch(error => {
          console.log("error")
          showErrorMessage("an error has occured in adding new person")
        })

        setNumber('')
        setName('')
      

    }
    
    
    //sets the filter used to present the user with people in the phonebook
    //matching the input in the filter input box
    const setCurrentFilter = (event) => {
      
      const filterRetrieved = event.target.value
      const listHasFilter = persons.filter((person)=>person.name.includes(newFilter))
      console.log("new filter is: ", filterRetrieved)
      console.log("new filteredList is:" ,listHasFilter )
      setFilter(filterRetrieved)
      setFilteredList(listHasFilter)
      
    }

  

    // const filtered = filterList()
    
    return (
      <div>
        <Notification message={errorMessage} />
        <h2>Phonebook</h2>
          <Filter newFilter={newFilter} setCurrentFilter={setCurrentFilter}/>
          
        <h2>add a new contact! </h2>
          <Form addNewPerson={addNewPerson} setCurrentName={setCurrentName} setCurrentNumber={setCurrentNumber} newName={newName} newNumber={newNumber}/>
        
        <h2>Numbers</h2>
          <PeopleList listOfPeople={filteredList} deleteSelectedPerson = {deleteSelectedPerson}/>
      </div>
    )
  
}


//components to show a list of People in the phone book matching the current filter
const PeopleList = ({listOfPeople,deleteSelectedPerson}) => {
  
  listOfPeople.forEach(person => {
    console.log(person._id)
  })

  return (
    <ul>
      {
      listOfPeople.map((person)=>
        // {console.log()}
        <Person key={person._id} name={person.name} number={person.number} id={person.id} deleteButton={() => deleteSelectedPerson(person)} />
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
const Person = ({number,name,id,deleteButton}) => {
  return (
    <div>
      <li class="note">{name} : {number} : {id}</li> <button onClick={deleteButton}>delete</button>
    </div>
  );
}

const Notification = ({message}) => {

  if(message===null){
    return null
  }

  return(
    <div className="error">
      {message}
    </div>
  );

}

export default App;
