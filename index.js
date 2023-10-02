// const { connect } = require('./database/db');
// connect();
const experss = require('express');
const cors = require("cors");
const app = experss();
const User = require('./model/userModel');
const data = require('./utility/data');

// Middleware to avoid CORS error
app.use(cors());


app.get("/", async (req, res) => {
    // await User.insertMany(data).then(function () {
    //     console.log("Data inserted")  // Success
    // }).catch(function (error) {
    //     console.log(error)      // Failure
    // });
    // res.status(200).json({
    //     status: "success"
    // });
    // console.log("into get");
    res.status(200).json(data);
});


//http://localhost:5000?page=1&limit=10
app.post("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const users = (data).slice(startIndex, endIndex);
        res.status(200).send(users);
    }
    catch (error) {
        res.sendStatus(500);
    }
})


app.listen(5000, () => {
    console.log("Running on port 5000")
})