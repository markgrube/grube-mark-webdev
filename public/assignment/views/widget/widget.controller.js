(function() {
        angular
            .module("WebAppMaker")
            .controller("WidgetChooserController", WidgetChooserController)
            .controller("WidgetListController", WidgetListController)
            .controller("WidgetEditController", WidgetEditController);

        function WidgetListController($routeParams, WidgetService, $sce) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            var pageId = parseInt($routeParams.pid);
            vm.pageId = pageId;

            vm.checkSafeHTML = checkSafeHTML;
            vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
            vm.checkSafeImageUrl = checkSafeImageUrl;
            vm.sortWidget= sortWidget;

            function generateWidgets(){
                WidgetService
                    .findWidgetsByPageId(vm.pageId)
                    .success(function(widgets) {
                        vm.widgets = widgets;
                    })
                    .error(function (){
                        console.log("No widgets found.")
                    });
            }
            generateWidgets();

            function checkSafeHTML(html){
                return $sce.trustAsHtml(html);
            }
            
            function checkSafeYouTubeUrl(url) {
                var parts = url.split('/');
                urlId = parts[parts.length-1];
                url = "https://www.youtube.com/embed/" + urlId;
                return $sce.trustAsResourceUrl(url);
            }

            function checkSafeImageUrl(url){
                return $sce.trustAsResourceUrl(url);
            }

            function sortWidget(start, end) {
                WidgetService
                    .sortWidget(start, end, vm.pageId);
            }
        }

        function WidgetChooserController($routeParams, WidgetService, $location) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            var pageId = parseInt($routeParams.pid);
            vm.pageId = pageId;

            vm.createWidget = createWidget;

            function createWidget(widget){
                WidgetService
                    .createWidget(vm.pageId, widget)
                    .success(function(widget) {
                        $location.url('/user/'+userId+'/website/'+webId+'/page/'+pageId+'/widget/'+widget._id);
                    })
                    .error(function (){
                        console.log("Failed to create widget.")
                    });
            }
        }

        function WidgetEditController($routeParams, WidgetService, $location) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            var pageId = parseInt($routeParams.pid);
            vm.pageId = pageId;

            var widgetId = parseInt($routeParams.wgid);
            vm.widgetId = widgetId;

            vm.deleteWidget = deleteWidget;
            vm.updateWidget = updateWidget;

            function generateWidget(){
                WidgetService
                    .findWidgetById(widgetId)
                    .success(function(widget) {
                        vm.widget = widget;
                    })
                    .error(function (){
                        console.log("Widget not found.")
                    });
            }
            generateWidget();

            function updateWidget() {
                WidgetService
                    .updateWidget(widgetId, vm.widget)
                    .success(function() {
                        $location.url('/user/'+userId+'/website/'+webId+'/page/'+pageId+'/widget');
                    })
                    .error(function (){
                        console.log("Failed to update widget.")
                    });
                $location.url('/user/'+userId+'/website/'+webId+'/page/'+pageId+'/widget');
            }

            function deleteWidget() {
                WidgetService.deleteWidget(widgetId)
                    .success(function() {
                        $location.url('/user/'+userId+'/website/'+webId+'/page/'+pageId+'/widget');
                    })
                    .error(function (){
                        console.log("Failed to delete widget.")
                    });
            }
        }
    }
)();