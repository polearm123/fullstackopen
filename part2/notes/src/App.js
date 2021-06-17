import React, {useState,useEffect} from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'


function App(props) {

  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('a new note...')
  const [showAll,setShowAll] = useState(false)

  const hook = () => {

    console.log('effect')
    noteService
      //.get makes request .then is an event handler that handles the
      //response from the server, after the promise has been fulfilled
      //the component is re-rendered using change state
      .getAll().then(initialNotes=>{
        setNotes(initialNotes)
      })

  }
  
  useEffect(hook,[])


  const toggleImportancemportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const note = notes.find(n => n.id === id)

    //changes the importance of the note matching the note ID selected
    // the ... notation keeps everything else in the object the same
    const changedNote = {...note,important:!note.important}

    //creates a new object to replace the object in thedatabase with
    //then creates a put request with the note and the url 
    //setNotes
    noteService.update(id,changedNote).then(returnedNote => {
      //sets the notes array to a new array containing the exact same as the previous
      //except where the note id is the same as the one specified here, then it is changed
      //to the resposne data
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })

  }

  
  //checks if show all is true, if so it prints all notes, if not it only prints the important ones
  const notesToShow = showAll ? notes:notes.filter(note=>note.important === true)
  
  //creates a new note object with the newNote value at the time of the button click
  //adds the current date, a random importance and resets the newNote value 
  //as if the input has cleared after submission
  const addNote = (event) => {

    event.preventDefault()
    var newNoteObject = 
    {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5
    }

    noteService.create(newNoteObject)
    .then((returnedNote) => {
      
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })

  }

  const changeShowImportance = (event) => {

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
        <button onClick={changeShowImportance}>{showAll? "important notes only":"all notes"}</button>
      </div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note,i) => 
          <Note 
            key= {i} 
            note = {note}
            //each note has its own event handler because of the id difference between notes
            toggleImportance = {() => toggleImportancemportanceOf(note.id)}
          /> //notice the key is placed inside the Note component, not needed inside list elements
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
