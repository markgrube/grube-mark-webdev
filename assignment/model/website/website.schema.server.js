module.exports = function (mongoose) {

    var mongoose = require('mongoose');
    var pageSchema = require("../page/page.schema.server")(mongoose);

    return mongoose.Schema({
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: {type: String, trim: true},
        description: {type: String, trim: true},
        pages: [pageSchema]
    }, {
        collection: "website",
        timestamps: true
    });
};