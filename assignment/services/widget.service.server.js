module.exports = function (app, model) {

    var multer = require('multer');
    var upload = multer({dest: __dirname + '/../../public/uploads'});

    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);
    // app.put('/api/page/:pageId/widget', sortWidget);
    app.post("/api/uploads", upload.single('myFile'), uploadImage);

    function createWidget(req, res) {
        var pageId = req.params.pageId;
        var widget = req.body;
        model
            .widgetModel
            .createWidget(pageId, widget)
            .then(
                function (newWidget) {
                    res.send(newWidget)
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        model
            .widgetModel
            .findAllWidgetsForPage(pageId)
            .then(
                function (obj) {
                    res.send(obj);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        model
            .widgetModel
            .findWidgetById(widgetId)
            .then(
                function (obj) {
                    res.send(obj);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function updateWidget(req, res) {
        var widget = req.body;
        var widgetId = req.params.widgetId;
        model
            .widgetModel
            .updateWidget(widgetId, widget)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        model
            .widgetModel
            .deleteWidget(widgetId)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function sortWidget(req, res) {
        var start = parseInt(req.query.start);
        var end = parseInt(req.query.end);
        var pageId = req.params.pageId;
        model
            .widgetModel
            .sortWidget(pageId, start, end)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function uploadImage(req, res) {

        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        var userId = req.body.userId;
        var webId = req.body.webId;
        var pageId = req.body.pageId;
        var url = "/assignment/index.html#/user/" + userId + "/website/" + webId + "/page/" + pageId + "/widget/" + widgetId;
        model
            .widgetModel
            .uploadImage(widgetId, filename)
            .then(
                function (image) {
                    res.redirect(url);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }
};