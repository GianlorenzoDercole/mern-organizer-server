

const db = require('../models')

const router = require('express').Router()

// GET /tasks -- index of tasks
router.get('/', async (req, res) => {
    try {
        // find all tasks
        const tasks = await db.Task.find({})
        // send them to clinet
        res.json(tasks)
    } catch {
        console.log(err)
    }
})


// GET /tasks/:id -- details on one task
router.get('/:id', async (req, res) => {
    try {
        // get the id of a task from the url params
        console.log(req.params.id)
        const task = await db.Task.findById(req.params.id)

        // send task back to client
        res.json(task)
    } catch {
        console.log(err)
    }
})

// POST /tasks -- create new task
router.post('/', async (req, res) => {
    try{
        const newTask = await db.Task.create(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        console.log(err)
    }
})

// PUT /tasks/:id -- update a task
router.put('/:id', async (req, res) => {
    try {
        // get the id from the url params
        const id = req.params.id
        // search for the id, in the db and update using req.body
        const options = { new: true } // return the updated task to us
        const updatedTask = await db.Task.findByIdAndUpdate(id, req.body, options)
        // send the updated task back to the client
        res.json(updatedTask)
    } catch {
        console.log(err)
    }
})

// DELETE /tasks/:id -- destroy a task
router.delete('/:id', async (req, res) => {
    try {
        // get the id from the req.params
        const id = req.params.id
        // delete that task in the db
        await db.Task.findByIdAndDelete(id)

        // send 'no content' status
        res.sendStatus(204) // was succesful -- nothing exists
    } catch {
        console.log(err)
    }
})

module.exports = router
