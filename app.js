// Importing NPM Modules
const express = require("express")
const dotenv = require("dotenv")
dotenv.config('.env')

// Importing Modules

const postRoute = require('./routes/postRoute')
const projectRoute = require('./routes/projectsRoute')

// Init app
const app = express()

// Routes
app.use('/api/v1/post', postRoute)
app.use('/api/v1/project', projectRoute)

module.exports = app