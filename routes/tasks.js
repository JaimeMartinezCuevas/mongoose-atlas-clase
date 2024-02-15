const express = require('express')
const router = express.Router()
const Task = require('../models/Task')
const { error } = require('console')


router.post('/create', async(req, res) => {
    try {
        const task = await Task.create({...req.body, completed: false})

        res.status(201).json(task)

    } catch (error) {
        console.log(error)
    }


})


router.get('/', async(req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        console.log(error)
    }
})


router.get('/id/:_id', async(req, res) => {
    try {
        const task = await Task.findById(req.params._id)
        res.json(task)
    } catch {
        console.log(error)
    }
})


router.get('/markAsCompleted/:_id', async(req, res) => {
    try {
        const idtask = req.params._id
        const task = await Task.findByIdAndUpdate(
            idtask, {
                completed:true
            }, {new: true}
        )
        res.json(task)
    } catch {
        console.log(error)
    }
})


router.get('/id/:_id', async(req, res) => {
    try {
        const id = req.params._id
        const title = req.body.title
        const task = await Task.findByIdAndUpdate(id, {title}, {new: true})

        res.json(task)
    } catch {
        console.log(error)
    }
})


router.delete('/id/:_id', async(req, res) => {
    try {
        const id = req.params._id
        const task = await Task.findByIdAndDelete(id)

        res.json(task)
    } catch {
        console.log(error)
    }
})


module.exports = router