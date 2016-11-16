module.exports = function (mongoose) {

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
        timestamps: true
    });
};