const allRouter = require('express').Router();
const Auth = new (require('../Auth/auth'))
const LoginRouter = require('./logInRouter');
const TaskRouter = require('./taskRouter');
const UserRouter = require('./userRouter');


// SessionCheck
const SessionCheck = (req, res, next) => {
    if (req.headers.token) {
        Auth.JwtVerifyToken(
            req.headers.token,
            req.headers.username,
            function (err, response) {
                if (err) {
                    return res.json({ status: false, Message: err });
                } else {
                    next();
                }
            }
        );
    } else res.json({ status: false, Message: "Token Not Found" });
};

// All Routers

allRouter.use("/user", SessionCheck, UserRouter);
allRouter.use("/task", SessionCheck, TaskRouter);
allRouter.use("/auth", LoginRouter);


module.exports = allRouter;
