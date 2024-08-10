import {model, Schema} from "mongoose";

let schema = new Schema({
    name:String,
    email:String,
    password:String
})

export const User = model('User' , schema)