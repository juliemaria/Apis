const express = require('express');
const nbaInput = require('./inputJson/input.json')
const app = express();
app.get('/nbaData', (req,res) => {
    
    res.json(nbaInput);
    
})
app.get('/movieData', (req,res) => {
    
    res.json("MOVIE ENDPOINT");
    
})
app.listen(process.env.PORT || 8080, () => {
    console.log("Listening")
})
