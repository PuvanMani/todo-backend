const express = require('express');
const LoginRouter = express.Router();


// Modlues
var Login = new (require("../Auth/Login/logIn"))


LoginRouter.post("/:action", function (req, res) {
    Login.LoginCheck(req, function (err, response) {
        if (err) {
            res.json({ "Status": false, "Message": err })
        } else {
            res.json({ "Status": true, "Message": response })
        }
    })
})

module.exports = LoginRouter;
