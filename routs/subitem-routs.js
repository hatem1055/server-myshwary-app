const express = require('express')
const SubitemModel = require('../db/models/subitem-model')
const subitemRoute = new express.Router()

subitemRoute.post('/subitem',async (req,res)=>{
    const {parent_id,name,isNeeded} = req.body
    try {
        const subitem = await SubitemModel.create({
            parent_id,name,isNeeded
        })
        res.send(subitem)
    } catch (e) {
        res.send(e)
    }
})

subitemRoute.patch('/subitem-toggle-done', async (req, res) => {
    const _id = req.body.id
    try {
        const oldItem = await SubitemModel.findById(_id)
        oldItem.isDone = !oldItem.isDone
        const saved = await oldItem.save()
        res.send(saved)
    } catch (e) {
        res.send(e.message)
    }
})
subitemRoute.patch('/subitem-change-name', async (req, res) => {
    const newName = req.body.name
    const _id = req.body.id
    try {
        const item = await SubitemModel.findById(_id)
        item.name = newName
        const saved = await item.save()
        res.send(saved)
    } catch (e) {
        res.send(e.message)
    }
})

subitemRoute.delete('/subitem',async(req, res)=>{
    const _id = req.body.id
    try {
        const deleted = await SubitemModel.findOneAndDelete({_id})
        res.send(deleted)
    } catch (e) {
        res.send(e.message)
    }
})


module.exports = subitemRoute