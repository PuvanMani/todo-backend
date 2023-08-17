const express = require('express');
const TaskRouter = express.Router();


// Modlues
var Task = new (require("../Module/Task/taskModule"))


TaskRouter.post("/:action", function (req, res) {
    Task.Chechup(req, function (err, response) {
        if (err) {
            res.json({ "Status": false, "Message": err })
        } else {
            res.json({ "Status": true, "Message": response })
        }
    })
})
TaskRouter.put("/:action", function (req, res) {
    Task.Chechup(req, function (err, response) {
        if (err) {
            res.json({ "Status": false, "Message": err })
        } else {
            res.json({ "Status": true, "Message": response })
        }
    })
})

module.exports = TaskRouter;
