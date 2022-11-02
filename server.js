const express = require('express')
const app = express()

// db.connection
require('dotenv').config();



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.APP_PORT||3000, () => {
    console.log(`Example app listening on port ${process.env.APP_PORT||3000}`)
})