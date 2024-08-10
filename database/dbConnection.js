import { connect } from "mongoose";

export const dbConn = connect('mongodb://localhost:27017/anonsend-mvc')
.then(()=>{
    console.log('database connected successfully');
}).catch(()=>{
    console.log('database error');
})