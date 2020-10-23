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
itemSchema.plugin(require('mongoose-autopopulate'))
itemSchema.virtual("needed",{
    ref:"Subitem",
    localField:"_id",
    foreignField:"parent_id",
    justOne:false,
    match:{isNeeded:true}
})

itemSchema.virtual("shouldGet",{
    ref:"Subitem",
    localField:"_id",
    foreignField:"parent_id",
    justOne:false,
    match:{isNeeded:false}
})




const itemModel = mongoose.model('Item',itemSchema)


module.exports = itemModel;