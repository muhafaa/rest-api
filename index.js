const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const router = require('./routes/router');

// app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/contacts', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))