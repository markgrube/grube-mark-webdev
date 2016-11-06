/**
 * Created by Mark on 11/5/2016.
 */
(function() {
    angular
        .module("jgaDirectives", [])
        .directive("jgaSortable", jgaSortable);

    function jgaSortable() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var start = -1;
                var end = -1;
                $(element)
                    .sortable({
                        sort: function(event, ui) {
                            start = ui.item.index();
                        },
                        stop: function(event, ui) {
                            end = ui.item.index();
                            if(start >= end) {
                                start--;
                            }
                            scope.jgaSortableCallback({start: start, end: end});
                        }
                    });
            },
            scope: {
                jgaSortableCallback: "&"
            }
        }
    }
})();