
const express = require('express')
const app = express()
app.use(express.json())

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]


  app.get('/',(request,response) => {
      response.send('<h1>Hello world!</h1>')
  })

  app.get('/api/notes',(request,response) => {
      response.json(notes)
  })

  app.get('/api/notes/:id',(request,response) => {
      console.log("inside requesting certain id")
      console.log(request.params)

      //request parameters are strings,for comparisons
      //purposes need to change to number/integer

      const id = Number(request.params.id)
      console.log(`id is ${id}`)
      const foundNote = notes.find(note => note.id === id)
      if(foundNote){
        response.json(foundNote)
      }else{
          response.status(400).end()
      }
  })

  app.delete('/api/notes/:id', (request,response)=>{
      const id = request.params.id
      notes = notes.filter((note)=>note.id!=id)
      response.status(204).end()
     
  })

  //maps all the notes to just ids
  //finds the max of those IDs using the math.max built in function
  const generateId = () => {

    const maxId = notes.length > 0? Math.max(...notes.map(n=> n.id)):0
    return maxId+1

  }

  app.post('/api/notes', (request,response) => {
    
    const body = request.body

    //if there is no body in the request send a 404 error with json object
    if(!body.content){
      return response.status(404).json({error:'content missing'})
    }
    
    //creates a new note object from the body content 
    const note = {
      content:body.content,
      important:body.important || false,
      date: new Date(),
      id:generateId()
    }
   
    console.log("inside add note, note is: ", note)
    notes = notes.concat(note)
    console.log("notes:",notes)

    response.json(note)
  })

const PORT = 3099
app.listen(PORT)
console.log(`server running on port ${PORT}`)