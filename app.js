const express = require('express'),
    app = express(),
    path = require('path')
let port = process.env.PORT || 3000

// //mongoose setup test
// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://hatem1055:hatemmostafa@cluster0.tfqdd.mongodb.net/test' ,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology: true 
// })
// const devSchema = mongoose.Schema({
//     name:{
//         type: String
//     }
// })

// const devModle = mongoose.model('Developer',devSchema)

//test endpoint
app.get('/test',async (req, res)=>{
    res.send('newDev.name');
})

//runing the app
app.listen(port, () => {
    console.log('server is up on port:' + port)
});