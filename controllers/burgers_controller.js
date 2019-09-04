var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', (req,res) => {
    burger.selectAll(data => {
        res.render('index',{cats:data});
    });
});

router.post('/api/burgers', (req,res) => {
    burger.insertOne([burger_name,devoured],[req.body.burger_name,req.body.devoured], result => {
        res.json({id: result.insertID});
    });
});

router.put('/api/burger/:id', (req,res) => {
    burger.updateOne([devoured],[req.body.devoured],req.params.id, result => {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;