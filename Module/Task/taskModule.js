const CommonFunction = new (require("../Common"))

function Task() {

}


Task.prototype.Chechup = function (req, cbk) {
    let action = req.params.action
    let self = this
    switch (action) {
        case "list":
            self.List(req, cbk)
            break;
        case "listbyid":
            self.ListByID(req, cbk)
            break;
        case "delete":
            self.Delete(req, cbk)
            break;
        case "update":
            self.Update(req, cbk)
            break;
        default:
            break;
    }
}



Task.prototype.List = function (req, cbk) {
    console.log(req.headers)
    const UserId = req.headers.userid
    const qry = `SELECT * FROM tasktable WHERE UserID=${UserId}`
    CommonFunction.List(qry, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })
}
Task.prototype.ListByID = function (req, cbk) {
    const TaskID = req.body.TaskID
    const qry = `SELECT * FROM tasktable WHERE TaskID=${TaskID}`
    CommonFunction.ListByID(qry, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })
}
Task.prototype.Update = function (req, cbk) {
    const TaskID = req.body.TaskID
    const Data = req.body
    const qry = `UPDATE tasktable SET ? WHERE TaskID=?`
    CommonFunction.Update(qry, Data, TaskID, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })
}
Task.prototype.Delete = function (req, cbk) {
    const TaskID = req.body.TaskID
    const qry = `DELETE FROM tasktable WHERE TaskID=${TaskID}`
    CommonFunction.Delete(qry, (err, result) => {
        if (err) {
            cbk(err, err)
        } else {
            cbk(err, result)
        }
    })
}


module.exports = Task;