const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

const { typeError } = require('./middlewares/errors')

const { dbConnection } = require('./config/config')
app.use(express.json())

dbConnection()

app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))
app.use('/comments', require('./routes/comments'))

app.use(typeError)

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.listen(PORT, () => console.log(`server open at port ${PORT}`))