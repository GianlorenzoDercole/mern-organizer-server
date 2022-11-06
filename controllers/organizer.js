

const db = require('../models')

const router = require('express').Router()

// GET /tasks -- index of tasks
router.get('/', async (req, res) => {
    try {
        // find all tasks
        const tasks = await db.Task.find({})
        // send them to clinet
        res.json(bounties)
    } catch {
        console.log(err)
    }
})


module.exports = router
