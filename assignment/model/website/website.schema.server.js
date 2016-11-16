module.exports = function (mongoose) {

    var pageSchema = require("../page/page.schema.server.js")(mongoose);

    return mongoose.Schema({
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: {type: String, trim: true},
        description: {type: String, trim: true},
        pages: [pageSchema]
    }, {
        timestamps: true
    });
};