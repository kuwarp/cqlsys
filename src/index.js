const express = require('express')
const app=express()
const PORT=3030

const User= require('./routes/User')
const Auth= require('./routes/Auth')
const dataRoutes= require('./routes/routes')


app.use(express.json());


app.use('/users',User)
app.use('/auth',Auth)
app.use('/dataAPi',dataRoutes)


app.listen(PORT,()=>{
    console.log('port started');
})
