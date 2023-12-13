import express from "express"
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "./../controllers/UserController.js"

const userRouter = express.Router()

userRouter.get('/users', getUsers)
userRouter.get('/user/:id', getUserById)
userRouter.post('/user', createUser)
userRouter.patch('/user/:id', updateUser)
userRouter.delete('/user/:id', deleteUser)
export default userRouter