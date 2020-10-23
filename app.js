const express = require('express'),
    app = express(),
    path = require('path')
const port = process.env.PORT || 3000

//routs
const itemRoute = require('./routs/item-routs.js')
const subItemRoute = require('./routs/subitem-routs.js')
//runing mongoose
require('./db/mongoose')
//parsing json
app.use(express.json())
//using routs
app.use(itemRoute);
app.use(subItemRoute)

//runing the app
app.listen(port, () => {
    console.log('server is up on port:' + port)
});