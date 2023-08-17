const express = require('express');
const UserRouter = express.Router();


// Modlues
var User = new (require("../Module/User/userModule"))


UserRouter.post("/:action", function (req, res) {
    User.Chechup(req, function (err, response) {
        if (err) {
            res.json({ "Status": false, "Message": err })
        } else {
            res.json({ "Status": true, "Message": response })
        }
    })
})
UserRouter.put("/:action", function (req, res) {
    User.Chechup(req, function (err, response) {
        if (err) {
            res.json({ "Status": false, "Message": err })
        } else {
            res.json({ "Status": true, "Message": response })
        }
    })
})

module.exports = UserRouter;
