(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService() {
        var widgets = [
            { "_id": 001, "widgetType": "HEADER", pid: "001", "size": 2, "text": "GIZMODO"},
            { "_id": 002, "widgetType": "HEADER", pid: "001", "size": 4, "text": "Lorem ipsum"},
            { "_id": 003, "widgetType": "IMAGE", pid: "001", "width": "100%", "url": "http://lorempixel.com/400/200/"},
            { "_id": 004, "widgetType": "HTML", pid: "001", "text": "<p>Lorem ipsum</p>"},
            { "_id": 005, "widgetType": "HEADER", pid: "001", "size": 4, "text": "Lorem ipsum"},
            { "_id": 006, "widgetType": "YOUTUBE", pid: "001", "width": "100%", "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": 007, "widgetType": "HTML", pid: "001", "text": "<p>Lorem ipsum</p>"}
        ];

        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;

        function createWidget(pageId, widget) {
            widget._id = widget.length;
            widget.pageId = pageId;
            widgets.push(widget);
        }

        function findWidgetsByPageId(pageId) {
            var result = [];
            for (var w in v) {
                if (widgets[w].pageId === pageId) {
                    result.push(widgets[w]);
                }
            }
            return result;
        }

        function findWidgetById(widgetId) {
            for (var w in widgets) {
                if (widgets[w]._id === widgetId) {
                    return widgets[w];
                }
            }
            return null;
        }

        function updateWidget(widgetId, widget) {
            widget._id = widgetId;

            for (var w in widgets) {
                if (widgets[w]._id === widgetId) {
                    widgets[w] = widget;
                    return 0;
                }
            }
            return 1;
        }

        function deleteWidget(widgetId) {
            for (var w in widgets) {
                if (widgets[w]._id === widgetId) {
                    widgets.splice(w, 1);
                    return 0;
                }
            }
            return 1;
        }


    }
})();