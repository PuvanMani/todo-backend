
const express = require('express');
const allRouter = require('./Router/allRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();
const db = require('../todo-backend/DB/dbConnection')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', allRouter);

db.getConnection((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connction Succesfully");
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})