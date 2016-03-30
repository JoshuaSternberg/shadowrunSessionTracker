var Character = require('../models/character');
var express = require('express');
var router = express.Router();


//Post new npc to the database
router.post('/', function(req, res) {
    var addNpc = new Character({
        "name": req.body.name,
        "source": req.body.source,
        "metatype": req.body.metatype,
        "body": req.body.body,
        "reaction": req.body.reaction,
        "strength": req.body.strength,
        "willpower": req.body.willpower,
        "logic": req.body.logic,
        "intuition": req.body.intuition,
        "charisma": req.body.charisma,
        "edge": req.body.edge,
        "magic_resonance": req.body.magic_resonance,
        "essence": req.body.essence,
        "initiative": req.body.initiative,
        "matrix_initiative": req.body.matrix_initiative,
        "astral_initiative": req.body.astral_initiative,
        "composure": req.body.composure,
        "judge_intent": req.body.judge_intent,
        "memory": req.body.memory,
        "lift_carry": req.body.lift_carry,
        "movement": req.body.movement,
        "physical_limit": req.body.physical_limit,
        "mental_limit": req.body.mental_limit,
        "social_limit": req.body.social_limit,
        "physical_track": req.body.physical_track,
        "stun_track": req.body.stun_track,
        "armor": req.body.armor,
        "character_notes": req.body.agility
        //"skills": req.body.skills,

    });

//post new blog post
    addNpc.save(function(err, data) {
        if(err) {
            console.log('ERROR:', err);
        }

        Character.find({}, function(err, data) {
            if(err) {
                console.log('ERROR:', err);
            }

            res.send(data);

        });
    });
});


//get all the pre-made npcs in the collection
router.get('/', function(req, res) {
    Character.find({}, function(err, data) {
        if (err) {
            console.log('ERROR:', err);
        }

        res.send(data);

    });
});

module.exports = router;