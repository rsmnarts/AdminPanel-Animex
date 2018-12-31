const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))