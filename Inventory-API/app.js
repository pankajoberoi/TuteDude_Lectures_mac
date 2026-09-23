const express = require('express');
const itemRouter=require('./routes/items')
const app = express()
const port = 8000

//Middleware to parse payload in json
app.use(express.json());


//Global Request Mid
app.use((req,res,next)=>{
    console.log(new Date() + " " + req.method);
    next()
})


//Router Mounting
app.use('/api/items',itemRouter);


//Global Error Handler Middleware
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        success:false,
        error:'Internal Server Error'
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})