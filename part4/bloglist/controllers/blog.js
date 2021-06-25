//controller is responsible for handling the routing, attaching this to the app
//exporting this app with route handlers back to index.js


const blogRouter = require('express').Router()
const Blog = require('../models/blog')


blogRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
    })
})
  
//posts a new blog to the database
blogRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
    })
})

module.exports = blogRouter