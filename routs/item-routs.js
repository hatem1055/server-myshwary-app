const express = require('express')
const ItemModel = require('../db/models/item-model')
const subitemModel = require('../db/models/subitem-model')
const itemRouter = new express.Router()

//add new item
itemRouter.post('/item', async (req, res) => {
    const name = req.body.name
    const newItem = new ItemModel({
        name
    })
    try {
        const newItemInfo = await newItem.save()
        res.send(newItemInfo)
    } catch (e) {
        res.send(e.message)
    }
})


//get items
itemRouter.get('/item', async (req, res) => {
    try {
        const items = await ItemModel.find({}).populate('needed shouldGet')
        const itemsData = []
        items.forEach((item)=>{
            console.log(item.needed)
            itemsData.push({
                name:item.name,
                _id:item.id,
                isDone:item.isDone,
                needed:item.needed,
                shouldGet:item.shouldGet
            })
        })
        res.send(itemsData)
    } catch (e) { res.send(e.message) }
})

//toggle done
itemRouter.patch('/item-toggle-done', async (req, res) => {
    const _id = req.body.id
    try {
        const oldItem = await ItemModel.findById(_id)
        oldItem.isDone = !oldItem.isDone
        const saved = await oldItem.save()
        res.send(saved)
    } catch (e) {
        res.send(e.message)
    }
})

//change item name
itemRouter.patch('/item-change-name', async (req, res) => {
    const newName = req.body.name
    const _id = req.body.id
    try {
        const item = await ItemModel.findById(_id)
        item.name = newName
        const saved = await item.save()
        res.send(saved)
    } catch (e) {
        res.send(e.message)
    }
})

//delete item
itemRouter.delete('/item',async(req, res)=>{
    const _id = req.body.id
    try {
        const deleted = await ItemModel.findOneAndDelete({_id})
        res.send(deleted)
    } catch (e) {
        res.send(e.message)
    }
})
//remove every thing
itemRouter.delete('/end-journey',async (req, res)=> {
    try{
        await ItemModel.deleteMany({})
        await subitemModel.deleteMany({})
        res.send('journey has ended')
    }catch(e){
        res.send(e)
    }
})
module.exports = itemRouter