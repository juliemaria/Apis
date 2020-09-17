const express = require('express');
const nbaInput = require('./inputJson/input.json')
const app = express();
app.get('/nbaData', (req,res) => {
    
    res.json(nbaInput);
    
})
app.listen(8080, () => {
    console.log("Listening")
})