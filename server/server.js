const express = require('express')
const cors= require('cors')
const app = express()
const port = 2969

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/hi", (req,res) => {
    res.send("Haash! Finally Working")
})
app.listen(port, () => console.log(`Listening to port ${port}`))