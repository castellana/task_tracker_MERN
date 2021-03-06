require("dotenv").config({ path: "./config/.env" });
console.log(process.env.test);
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const tasksRouter = require("./routes/tasks");
const usersRouter = require("./routes/users");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(process.env.dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => {
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    })
    .catch((err) => console.log(err));

app.get("/", (req, res) => res.render("index"));

app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);
