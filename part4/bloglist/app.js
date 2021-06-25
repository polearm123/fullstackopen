const http = require('http')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blog')
const config = require('./utils/config.js')
const logger = require('./utils/logger')
const mongoUrl = config.MONGODB_URI
const middleware = require('./utils/middleware')


logger.info('connecting to,' , config.MONGODB_URI)
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
morgan.token('content', function getContent(request) {
    const requestBody = JSON.stringify(request.body)
    return requestBody
  })
  
  
 
app.use(morgan(function (tokens, req, res) {
return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.content(req)
].join(' ')
}))

app.use('/api/blogs',blogRouter)
app.use(middleware.errorHandler)
app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoints)
  


module.exports = app