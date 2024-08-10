import { model , Schema } from "mongoose";

let schema = new Schema({
    message:String,
    user:String,
})

export const Message = model('Message',schema)