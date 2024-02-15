const express = require('express')
const app = express()
const PORT = 3000

const dbConnection = require('./config/config')

const taskRoutes = require('./routes/tasks')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', taskRoutes)

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http:localhost:${PORT}`)
})
