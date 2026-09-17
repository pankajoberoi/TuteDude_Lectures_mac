const express = require('express');
const app = express()
const employeeRouter=require("./routes/employeeRoutes")
const port = 8000

//MiddleWare
app.use(express.json());


//Router Mount
app.use("/employees",employeeRouter);

//H/W -> Employee Attendance CRUD

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})