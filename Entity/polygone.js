'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PolygoneSchema = new Schema({
    points: [{
        point: {
            long: Number,
            lat: Number
        }
    }],
    Color: Number,
    polygonId: Number,
    owner_name: String,
    owner_last_name: String,
    owner_phone_number: String,
    owner_adress: String,
    area_of_terrain: Number,
    area_of_terrain_unit: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

})
module.exports = mongoose.model('Polygone', PolygoneSchema);
