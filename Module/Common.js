const db = require("../DB/dbConnection")
function CommonFunction() {

}


CommonFunction.prototype.List = function (query, cbk) {
    db.query(query, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })

}

CommonFunction.prototype.ListByID = function (query, cbk) {
    db.query(query, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })

}
CommonFunction.prototype.Update = function (query, data, id, cbk) {
    db.query(query, [data, id], function (err, result) {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })

}
CommonFunction.prototype.Insert = function (query, data, cbk) {
    db.query(query, [data], function (err, result) {
        if (err) {
            cbk(err, err)
        }
        else {
            cbk(err, result)
        }
    })

}
CommonFunction.prototype.Delete = function (query, cbk) {
    db.query(query, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })

}


module.exports = CommonFunction;