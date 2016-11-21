module.exports = function () {
    var mongoose = require('mongoose');
    var connectionString = 'mongodb://localhost/webdev-fall-2016';
    if(process.env.MLAB_DB_USERNAME) {
        connectionString = process.env.MLAB_DB_URL_INIT +
            process.env.MLAB_DB_USERNAME + ":" +
            process.env.MLAB_DB_PASSWORD +
            process.env.MLAB_DB_URL_END + '/' +
            process.env.MLAB_DB_NAME;
    }
    mongoose.connect(connectionString);

    var userModel = require("./user/user.model.server")();
    var websiteModel = require("./website/website.model.server")();
    var pageModel = require("./page/page.model.server")();
    var widgetModel = require("./widget/widget.model.server")();

    var model = {
        userModel: userModel,
        websiteModel: websiteModel,
        pageModel: pageModel,
        widgetModel: widgetModel
    };

    return model;
};