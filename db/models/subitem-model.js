const mongoose = require('mongoose')

const subitemSchema = mongoose.Schema({
    parent_id:{type:mongoose.Schema.ObjectId,ref:"Item"},
    name: {
        required: true,
        type: String,
    },
    isDone:{
        default:false,
        type: Boolean,
    },
    isNeeded:{
        required: true,
        type: Boolean,
    }
})

const SubitemModel = mongoose.model('Subitem',subitemSchema)

module.exports = SubitemModel