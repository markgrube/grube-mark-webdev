/**
 * Created by Mark on 11/5/2016.
 */
module.exports = function(app){
    var widgets = [
        { "_id": 001, "widgetType": "HEADER", pid: 001, "size": 2, "text": "GIZMODO"},
        { "_id": 002, "widgetType": "HEADER", pid: 001, "size": 4, "text": "Lorem ipsum"},
        { "_id": 003, "widgetType": "IMAGE", pid: 001, "width": "100%", "url": "http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg"},
        { "_id": 004, "widgetType": "HTML", pid: 001, "text": '<p class="widget-spacing">In February, the <a href="http://gizmodo.com/white-house-wants-1-8-billion-to-fight-zika-1757772335">White House formally asked Congress for $1.8 billion</a>dollars to help combat the Zika virus this summer. Now, the Senate has worked out a bipartisan deal will allocate $1.1 billion in emergency funding.</p>'},
        { "_id": 005, "widgetType": "HEADER", pid: 001, "size": 4, "text": "Lorem ipsum"},
        { "_id": 006, "widgetType": "YOUTUBE", pid: 001, "width": "100%", "url": "https://youtu.be/uLWLashCXHE" },
        { "_id": 007, "widgetType": "HTML", pid: 001, "text": "<p>Lorem ipsum</p>"}
    ];

    var multer = require('multer');
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);
    app.put('/api/page/:pageId/widget', sortWidget);
    app.post ("/api/uploads", upload.single('myFile'), uploadImage);

    function createWidget(req, res){
        var widget = req.body;
        widget._id = (new Date()).getTime();
        widgets.push(widget);
        res.send(widget);
    }

    function findAllWidgetsForPage(req, res){
        var pageId = parseInt(req.params.pageId);
        var result = [];
        for (var w in widgets) {
            if(widgets[w].pid === pageId) {
                result.push(widgets[w]);
            }
        }
        res.send(result);
    }

    function findWidgetById(req, res){
        var widgetId = parseInt(req.params.widgetId);
        for (var w in widgets) {
            if(widgets[w]._id === widgetId) {
                res.send(widgets[w]);
                return;
            }
        }
        res.send('0');
    }

    function updateWidget(req, res){
        var widget = req.body;
        var widgetId = parseInt(req.params.widgetId);
        for(var w in widgets) {
            if(widgets[w]._id === widgetId) {
                widgets[w] = widget;
                return;
            }
        }
        res.send('200');
    }

    function deleteWidget(req, res){
        var widgetId = parseInt(req.params.widgetId);
        for (var i = 0; i < widgets.length; i++) {
            if(widgets[i]._id == widgetId) {
                widgets.splice(i, 1);
            }
        }
        res.send('200');
    }

    function sortWidget(req, res) {
        var pageId = req.params.pageId;
        var start = req.query.start;
        var end = req.query.end;
        var pageWidgets = -1;
        for(var w in widgets) {
            if(widgets[w].pageId == pageId) {
                pageWidgets++;
                if(start == pageWidgets) {
                    var startIndex = w;
                }
                if(end == pageWidgets) {
                    var endIndex = w;
                }
            }
        }
        var order = widgets.splice(startIndex, 1)[0];
        widgets.splice(endIndex, 0, order);
        res.send('200');
    }

    function uploadImage(req, res) {

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        var widgetId = parseInt(req.body.widgetId);
        for(var w in widgets) {
            if(widgets[w]._id === widgetId) {
                widgets[w].url = '/uploads/'+filename;
            }
        }
    }

};