const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let data = require('db/db.json');

router.ger('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if(!newTitle || !newText) {
        res.status(400).json({msg: 'Needs title'})
    } else {
        const newJSON = {
            id: uuid.v4(),
            title: newTitle,
            text: newText
        }
    }
})