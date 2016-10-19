(function() {
        angular
            .module("WebAppMaker")
            .controller("PageListController", PageListController)
            .controller("NewPageController", NewPageController)
            .controller("EditPageController", EditPageController)

        function PageListController($routeParams, PageService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            function generatePages(){
                vm.pages = PageService.findPagesForWebsite(webId)
            }
            generatePages();
        }

        function NewPageController($routeParams, PageService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;
        }

        function EditPageController($routeParams, PageService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;
        }
    }
)();