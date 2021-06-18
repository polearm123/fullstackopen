
const express = require('express')
const app = express()

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

const PORT = 3093
app.listen(PORT)
console.log(`server running on port ${PORT}`)