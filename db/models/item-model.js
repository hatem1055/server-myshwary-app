const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name:{
        type: String,
    },
    isDone:{
        type: Boolean,
        default: false
    }
})

const itemModel = mongoose.model('Item',itemSchema)

module.exports = itemModel;