const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        taskName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        date: {
            type: Date,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
