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
        case "insert":
            self.Insert(req, cbk)
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
User.prototype.Insert = function (req, cbk) {
    this.List(req, (err, result) => {
        if (err) {
            cbk(err, err)
        } else if (result.length > 0) {
            cbk("Username Aldready Exist", [])
        } else {
            Auth.EncryptMyPassword(req.body.Password, (err, hashPass) => {
                if (err) {
                    cbk(err, err)
                } else {
                    let data = {
                        Name: req.body.Name,
                        Email: req.body.Email,
                        userName: req.body.UserName,
                        Password: hashPass
                    }
                    let qry = "INSERT INTO usertable SET ?"
                    CommonFunction.Insert(qry, data, (err, response) => {
                        if (err) {
                            cbk(err, err)
                        } else {
                            cbk(err, response)
                        }
                    })
                }
            })

        }
    })
}


module.exports = User;