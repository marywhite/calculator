var express = require('express')
    , router = express.Router()
    , Operation = require('../models/Operation.js');


/* GET /operation listing. */
router.get('/', function(req, res, next) {
   Operation.find(function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* POST /operation */
router.post('/', function(req, res, next) {
    Operation.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /operation/:id */
router.delete('/:id', function(req, res, next) {
    Operation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;