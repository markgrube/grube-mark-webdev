module.exports = function (mongoose) {

    var mongoose = require('mongoose');

    return mongoose.Schema({
        _page: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Page"
        },
        widgetType: {
            type: String, trim: true,
            enum: ["HEADER", "IMAGE", "YOUTUBE", "HTML", "INPUT", "TEXT"]
        },
        name: {type: String, trim: true},
        text: {type: String, trim: true},
        placeholder: {type: String, trim: true},
        description: {type: String, trim: true},
        url: {type: String, trim: true},
        width: {type: String, trim: true},
        height: {type: String, trim: true},
        rows: {type: Number, trim: true},
        size: {type: Number, trim: true},
        class: {type: String, trim: true},
        icon: {type: String, trim: true},
        deletable: {type: Boolean, trim: true},
        formatted: {type: Boolean, trim: true}
    }, {
        collection: "widget",
        timestamps: true
    });
};