const express = require('express')

const app = express()

app.listen(3000,() => {
    console.log("Server Running in port:3000")
})

app.get('/',(req,res)=>{
    res.send("Cauã Carvalho")
})