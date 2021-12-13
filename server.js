const express = require("express");
const mongoose = require("mongoose");
const router = require("./schoolRoute")
const port = 2000;

const app = express();

app.use(express.json())

app.listen(port, ()=>{
    console.log("Listening to port", port)
})

// const url = "mongodb://localhost:27017/school"

// mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{
//     console.log("Successfully connected to Database")
// })

app.use("/data", router)

app.get("/", (req,res)=>{
    res.send("A school Api")
})
