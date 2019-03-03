'use strict';
var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {

    res.render('cv', {
        title: 'CV',
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country: req.body.country,
        date: req.body.date
    });
});

module.exports = router;