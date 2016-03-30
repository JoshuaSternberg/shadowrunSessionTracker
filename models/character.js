var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema =
    new Schema({
            "source": String,
            "name": String,
            "metatype": String,
            "body": Number,
            "agility": Number,
            "reaction": Number,
            "strength": Number,
            "willpower": Number,
            "logic": Number,
            "intuition": Number,
            "charisma": Number,
            "edge": Number,
            "magic_resonance": Number,
            "essence": Number,
            "initiative": String,
            "matrix_initiative": String,
            "astral_initiative": String,
            "composure": Number,
            "judge_intent": Number,
            "memory": Number,
            "lift_carry": Number,
            "movement": Number,
            "physical_limit": Number,
            "mental_limit": Number,
            "social_limit": Number,
            "physical_track": Number,
            "current_health": Array,
            "stun_track": Number,
            "current_stun": Array,
            "armor": Number,
            "character_notes": String,
            "skills": Array,
            "weapon": Array
        },
        {
            collection: 'characters'
        }
    );

module.exports = mongoose.model('Character', CharacterSchema);

