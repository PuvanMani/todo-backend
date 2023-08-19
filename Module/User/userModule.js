const Auth = new (require("../../Auth/auth"))

const CommonFunction = new (require("../Common"))

function User() {

}


User.prototype.Chechup = function (req, cbk) {
    let action = req.params.action
    let self = this
    switch (action) {
        case "list":
            self.List(req, cbk)
        default:
            break;
    }
}



User.prototype.List = function (req, cbk) {
    const UserName = req.body.UserName
    const qry = `SELECT * FROM usertable WHERE BINARY UserName='${UserName}'`
    CommonFunction.List(qry, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })
}



module.exports = User;