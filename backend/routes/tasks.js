const router = require("express").Router();
let Task = require("../models/task.model");

router.route("/").get((req, res) => {
    Task.find()
        .then((tasks) => res.json(tasks))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newTask = new Task({
        username,
        description,
        duration,
        date,
    });

    newExercise
        .save()
        .then(() => res.json("Exercise added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
