// create a task schema

const mongoose = require('mongoose')



const TaskSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
})

// export a task model

module.exports = mongoose.model('Task', TaskSchema)
