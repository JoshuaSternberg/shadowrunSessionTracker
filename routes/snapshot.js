var express = require('express');
var router = express.Router();
var Character = require('../models/character');
var Snapshot = require('../models/snapshot');

//Post new npc to the database
router.post('/', function(req, res) {

    var characterObjectArray = [];
    for (var i = 0; i < req.body.snapshot.length; i++){
        characterObjectArray.push(new Character(req.body.snapshot[i]));
    }

    console.log(req.body);
    var addSnapshot = new Snapshot({
        "user_id": req.user.id,
        "snapshot_name": req.body.snapshot_name,
        "snapshot": characterObjectArray
    });

//post new blog post
    addSnapshot.save(function(err, data) {
        if(err) {
            console.log('ERROR:', err);
        }
        res.sendStatus(200);

        //Snapshot.find({}, function(err, data) {
        //    if(err) {
        //        console.log('ERROR:', err);
        //    }
        //
        //    res.send(data);
        //
        //});
    });
});

//user_id: req.user.id
//get all the sessions in the collection based on the currently logged in user
router.get('/', function(req, res) {
    Snapshot.find({user_id: req.user.id}, function(err, data) {
        if (err) {
            console.log('ERROR:', err);
        }

        res.send(data);

    });
});

module.exports = router;