const express = require('express')
const app = express()
const port = 3000

app.get ('/:id',(req, res) =>{
    res.send({_id: req.params.id})
})

app.listen(port,() =>{
    console.log(`server is running ${port}`);
})
