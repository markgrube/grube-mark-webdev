module.exports = function(mongoose) {

    var websiteSchema = require("../website/website.schema.server")(mongoose);

    return mongoose.Schema({
        username: {type: String, trim: true, lowercase: true, unique: true},
        password: {type: String, trim: true},
        firstName: {type: String, trim: true},
        lastName: {type: String, trim: true},
        email: {type: String, trim: true, lowercase: true},
        phone: {type: String, trim: true},
        websites: [websiteSchema]
    }, {
        timestamps: true
    });
};