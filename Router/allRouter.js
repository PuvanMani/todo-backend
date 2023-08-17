const allRouter = require('express').Router();
const TaskRouter = require('./taskRouter');
const UserRouter = require('./userRouter');


// // SessionCheck
// const SessionCheck = (req, res, next) => {
//     if (req.headers.token) {
//         Auth.JwtVerifyToken(
//             req.headers.token,
//             req.headers.username,
//             function (err, response) {
//                 if (err) {
//                     return res.json({ status: false, Message: err });
//                 } else {
//                     next();
//                 }
//             }
//         );
//     } else res.json({ status: false, Message: "Token Not Found" });
// };

// Change Password

allRouter.use("/user", UserRouter);
allRouter.use("/task", TaskRouter);


module.exports = allRouter;
