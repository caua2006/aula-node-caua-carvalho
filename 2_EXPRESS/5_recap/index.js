const express = require('express')
const path = require("path")


const app = express()

const caminho = path.join(__dirname,'templates')

app.listen(3000,() => {
    console.log("Server Running in port:3000")
})

app.get('/',(req,res)=>{
    res.sendFile(`${caminho}/index.html`)
})