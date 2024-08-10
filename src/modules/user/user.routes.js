import { Router } from "express";
import { logout, sendMsg, user } from "./user.controller.js";


let userRouter = Router()

userRouter.get('/user/:id',user)
userRouter.post('/sendMsg/:id',sendMsg)
userRouter.get('/logout',logout)




export default userRouter