const express = require('express'),
    app = express(),
    path = require('path')
const port = process.env.PORT || 3000

//routs
const itemRoute = require('./routs/item-routs.js')
//runing mongoose
require('./db/mongoose')
//parsing json
app.use(express.json())
//using routs
app.use(itemRoute);

//runing the app
app.listen(port, () => {
    console.log('server is up on port:' + port)
});