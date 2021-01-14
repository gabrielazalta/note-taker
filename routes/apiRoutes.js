const router = require('express').Router();
const {
    v4: uuidv4
} = require('uuid');
const fs = require("fs");

let db = require('../db/db.json');

//localhost:3001/api
router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    //req.body = object = userinput from the frontend
    req.body.id = uuidv4();
    db.push(req.body)
    console.log(db);

    fs.writeFile("db/db.json", JSON.stringify(db), function (err) {
        if (err) {
            console.log(err);
        }
    })
});

module.exports = router;