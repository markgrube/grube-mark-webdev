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

            function generateWidgets(){
                vm.widgets = WidgetService.findWidgetsByPageId(pageId)
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

        function WidgetEditController($routeParams, WidgetService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            var pageId = parseInt($routeParams.pid);
            vm.pageId = pageId;

            var widgetId = parseInt($routeParams.wgid);
            vm.widgetId = widgetId;

            function generateWidget(){
                vm.widget = WidgetService.findWidgetById(widgetId)
            }
            generateWidget();
        }

    }
)();