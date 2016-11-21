module.exports = function (mongoose) {

    var mongoose = require('mongoose');
    var widgetSchema = require("../widget/widget.schema.server.js")(mongoose);

    return mongoose.Schema({
        _website: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Website"
        },
        name: {type: String, trim: true},
        title: {type: String, trim: true},
        description: {type: String, trim: true},
        widgets: [widgetSchema]
    }, {
        collection: "page",
        timestamps: true
    });
};