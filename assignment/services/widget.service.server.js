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

    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);

    function createWidget(req, res){}
    function findAllWidgetsForPage(req, res){}
    function findWidgetById(req, res){}
    function updateWidget(req, res){}
    function deleteWidget(req, res){}

}