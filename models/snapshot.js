var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CharacterSchema = require('./character').schema;

var SnapshotSchema =
    new Schema({
            "user_id": Schema.Types.ObjectId,
            "snapshot_name": String,
            "snapshot": [CharacterSchema]
        },
        {
            collection: 'snapshots'
        }
    );

module.exports = mongoose.model('Snapshot', SnapshotSchema);