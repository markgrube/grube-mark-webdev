module.exports = function () {

    var model = {};
    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

    var api = {
        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget,
        sortWidget: sortWidget,
        uploadImage: uploadImage
    };
    return api;

    function createWidget(pageId, widget) {
        widget["_page"] = pageId;
        return WidgetModel.create(widget);
    }

    function findAllWidgetsForPage(pageId) {
        return WidgetModel
            .find({
                _page: pageId
            })
            .sort({
                order: 1
            });
    }

    function findWidgetById(widgetId) {
        return WidgetModel.findOne({_id: widgetId});
    }

    function updateWidget(widgetId, widget) {
        switch (widget.widgetType) {
            case "HEADER":
                return WidgetModel
                    .update(
                        {
                            _id: widgetId
                        },
                        {
                            name: widget.name,
                            text: widget.text,
                            size: widget.size
                        }
                    );
                break;

            case "IMAGE":
                return WidgetModel
                    .update(
                        {
                            _id: widgetId
                        },
                        {
                            name: widget.name,
                            text: widget.text,
                            url: widget.url,
                            width: widget.width
                        }
                    );
                break;

            case "YOUTUBE":
                return WidgetModel
                    .update(
                        {
                            _id: widgetId
                        },
                        {
                            name: widget.name,
                            text: widget.text,
                            url: widget.url,
                            width: widget.width
                        }
                    );
                break;

            case "HTML":
                return WidgetModel
                    .update(
                        {
                            _id: widgetId
                        },
                        {
                            name: widget.name,
                            text: widget.text
                        }
                    );
                break;

            default:
                break;
        }
    }

    function deleteWidget(widgetId) {
        return WidgetModel.remove({_id: widgetId});
    }

    function sortWidget(pageId, start, end) {
        return WidgetModel
            .find({
                    _page: pageId
                },
                function (error, widgets) {
                    widgets.forEach(function (widget) {
                        if (start > end) {
                            if (widget.order >= end && widget.order < start) {
                                widget.order++;
                                widget.save(function () {
                                });
                            } else if (widget.order === start) {
                                widget.order = end;
                                widget.save(function () {
                                });
                            }
                        } else {
                            if (widget.order === start) {
                                widget.order = end;
                                widget.save(function () {
                                });
                            } else if (widget.order > start && widget.order <= end) {
                                widget.order--;
                                widget.save(function () {
                                });
                            }
                        }
                    });
                });
    }

    function uploadImage(widgetId, filename) {
        return WidgetModel
            .update(
                {
                    _id: widgetId
                },
                {
                    url: '/../../uploads/' + filename
                }
            );
    }
};