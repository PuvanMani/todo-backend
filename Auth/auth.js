const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
function Auth() {

}

Auth.prototype.EncryptMyPassword = async function (plainPassword, cbk) {
    bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
        if (err) cbk(err, err)
        else cbk(false, hash)
    });
}
Auth.prototype.DecryptMyPassword = async function (plainPassword, hash, cbk) {
    bcrypt.compare(plainPassword, hash, function (err, hash) {
        if (err) cbk(err, err)
        else cbk(err, hash)
    });
}

Auth.prototype.JwtGenerateToken = async function (payload, cbk) {
    jwt.sign(payload, payload.UserName, { expiresIn: '8h' }, function (err, token) {
        if (err) cbk(err, err)
        else cbk(false, token)
    });
}

Auth.prototype.JwtVerifyToken = function (token, username, cbk) {
    jwt.verify(token, username, function (err, res) {
        if (err) cbk(err, err)
        else cbk(err, res)
    });
}

module.exports = Auth;