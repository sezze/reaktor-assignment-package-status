// Imports
const fs = require('fs')
const path = require('path')
const pkgParser = require('./pkg-parser')
const express = require('express')
const cors = require('cors')
const { server: { apiPort } } = require('./config')

// App
const app = express()
app.use(cors()) // Use cors to allow website to access api server

// /status returns the parsed JSON data
app.get('/status', async (req, res) => {
  fs.readFile('status', 'utf8', (err, data) => {
    if (err) {
      // On error, ie the file can not be read
      res.sendStatus(500)
    } else {
      // Parse and send the JSON data
      res.json(pkgParser.parse(data.replace(/\r/gm, '')))
    }
  })
})

// If running in production: serve client build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

// Listen on configured port
app.listen(apiPort, () => console.log(`API server listening on port ${apiPort}`))
