import React, { useState } from 'react'

function App() {
  
    const [persons,setPersons] = useState([{name:'arto Hellas'}])

    const [newName,setName] = useState('enter something here...')
  
    const setCurrentName = (event) => {
      // console.log(event.target.value)
      setName(event.target.value)
    }

    const addNewPerson = (event) => {
      event.preventDefault()
      var newPerson = {name:newName}
      console.log(persons)
      setPersons(persons.concat(newPerson))
      setName('')


    }



    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addNewPerson}>

          <div>
            name: <input value={newName} onChange={setCurrentName}/>
          </div>

          <div>
            <button type="submit">add</button>
          </div>

        </form>
        <h2>Numbers</h2>
        ...
      </div>
    )
}

export default App;
