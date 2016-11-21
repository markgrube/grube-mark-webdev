module.exports = function() {

    var mongoose = require('mongoose');
    var websiteSchema = require("../website/website.schema.server")(mongoose);

    return mongoose.Schema({
        username: {type: String, trim: true, lowercase: true, unique: true},
        password: {type: String, trim: true},
        first: {type: String, trim: true},
        last: {type: String, trim: true},
        email: {type: String, trim: true, lowercase: true},
        phone: {type: String, trim: true},
        websites: [websiteSchema]
    }, {
        collection: "user",
        timestamps: true
    });
};