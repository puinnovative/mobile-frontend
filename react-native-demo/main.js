const express = require("express");

const app = express();

app.get('/list', (req,res) => {
    res.send([
        {
            id: 0,
            key: "hi"
        },
        {
            id: 1,
            key: "hi1"
        },
        {
            id: 2,
            key: "hi2"
        },
    ])
})

app.listen(3000, () => {
    console.log("is running...")
})