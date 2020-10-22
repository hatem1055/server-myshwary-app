const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name:{
        type: String,
        default: 'failed'

    },
    isDone:{
        type: Boolean,
        default: false
    }
})

const itemModel = mongoose.model('Item',itemSchema)

module.exports = itemModel;