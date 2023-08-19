const CommonFunction = new (require("../../Module/Common"));

const Auth = new (require("../auth"));

const User = new (require("../../Module/User/userModule"));

function Login() {

}

Login.prototype.LoginCheck = function (req, cbk) {
    const action = req.params.action;
    let self = this;
    switch (action) {
        case "login":
            self.LoginAccess(req, cbk)
            break;
        case "register":
            self.Register(req, cbk)
            break;
        default:
            break;
    }
}


Login.prototype.LoginAccess = function (req, cbk) {
    User.List(req, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            if (result[0]?.UserName == req.body.UserName) {
                Auth.DecryptMyPassword(req.body.Password, result[0]?.Password, (err, passSts) => {
                    if (err) {
                        cbk(err, err)
                    } else if (passSts) {
                        Auth.JwtGenerateToken({ UserName: result[0].UserName }, (err, token) => {
                            if (err) {
                                cbk(err, err)
                            } else {
                                let data = [
                                    { token, UserName: result[0].UserName, UserID: result[0].UserID }
                                ]
                                cbk(err, data)
                            }
                        })
                    } else {
                        cbk("Check Your Password", [])
                    }
                })

            } else {
                cbk(result.length == 0 ? "UserName Not Found" : "Check Your Password", [])
            }
        }
    })
}

Login.prototype.Register = function (req, cbk) {
    User.List(req, (err, result) => {
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

module.exports = Login;