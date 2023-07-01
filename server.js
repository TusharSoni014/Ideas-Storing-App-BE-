const express = require("express")
const app = express()
const port = 4000

app.get("/",(req,res)=>{
    res.send({
        data:"hehe"
    })
})

app.listen(port,()=>{
    console.log("http://localhost:4000")
})