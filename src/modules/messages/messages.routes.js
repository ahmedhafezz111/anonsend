import { Router } from "express";
import { messages } from "./messages.controller.js";


let messagesRouter = Router()

messagesRouter.get('/messages',messages)


export default messagesRouter