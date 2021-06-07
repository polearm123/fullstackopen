import React, {useState} from 'react'
import Note from './components/Note'


function App(props) {

  const [notes,setNotes] = useState(props.notes)
  const [newNote,setNewNote] = useState('a new note...')
  const [showAll,setShowAll] = useState(false)

  //checks if show all is true, if so it prints all notes, if not it only prints the important ones

  const notesToShow = showAll ? notes:notes.filter(note=>note.important === true)



  //creates a new note object with the newNote value at the time of the button click
  //adds the current date, a random importance and resets the newNote value 
  //as if the input has cleared after submission
  const addNote = (event) => {
    event.preventDefault()
    var newNoteObject = 
    {id: notes.length+1,
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5}

    setNotes(notes.concat(newNoteObject))
    setNewNote('')

  }

  const changeImportance = (event) => {

    event.preventDefault()
    setShowAll(!showAll)


  }
 
  //changes the state of the newNote everytime the input text box
  //receieves a change
  //this makes it possible to retrieve the last newNote on submission button
  //press

  const handleNoteChange = (event) => {

    console.log(event.target.value)
    setNewNote(event.target.value)

  }

  return (
    
    <div>
      
      <div>
        <button onClick={changeImportance}>{showAll? "important notes only":"all notes"}</button>
      </div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => 
          <Note key= {note.id} note = {note}/> //notice the key is placed inside the Note component, not needed inside list elements
        )}
      </ul>
      <form onSubmit={addNote}>

          <input value={newNote} onChange={handleNoteChange}/>
          <button type="submit">save</button>

      </form>
    </div>
  );
}



export default App;
