import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routers/user.js'

const app = express();
const port = 5000;

app.use(bodyParser.json())

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => console.log(`Server running on the port : ${port}`))

