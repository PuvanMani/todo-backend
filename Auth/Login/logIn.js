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



module.exports = Login;