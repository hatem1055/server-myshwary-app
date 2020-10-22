const express = require('express')
const ItemModel = require('../db/models/item-model')
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
        const items = await ItemModel.find({})
        res.send(items)
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
module.exports = itemRouter