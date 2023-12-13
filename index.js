import express from 'express'
import cors from 'cors'
import UserRouter from './routers/UserRouter.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(UserRouter)

app.listen(3000, () => console.log('server is running ....'))

