(function() {
        angular
            .module("WebAppMaker")
            .controller("WidgetChooserController", WidgetChooserController)
            .controller("WidgetListController", WidgetListController);

        function WidgetListController($routeParams, WidgetService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            var pageId = parseInt($routeParams.pid);
            vm.pageId = pageId;

            function generateWidgets(){
                vm.widgets = WidgetService.findWidgetsByPageId(pageId)
            }
            generateWidgets();
        }

        function WidgetChooserController($routeParams, WidgetService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            var pageId = parseInt($routeParams.pid);
            vm.pageId = pageId;

            function generateWidgets(){
                vm.widgets = WidgetService.findWidgetsByPageId(pageId)
            }
            generateWidgets();
        }

    }
)();