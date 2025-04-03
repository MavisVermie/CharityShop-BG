const port = process.env.PORT || 8000
const express = require('express')
const environment =  "production"
const config = require('./config/config')
require('./config/database.config')({
  connectionString: process.env.MONGODB_URI
})
const app = express()

database(config[environment])
require('./config/express')(app, config[environment])
require('./config/routes')(app)
require('./config/passport')()

app.listen(port, () => { console.log('Listening on port: ' + port) })
