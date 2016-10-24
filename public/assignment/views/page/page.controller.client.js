(function() {
        angular
            .module("WebAppMaker")
            .controller("PageListController", PageListController)
            .controller("NewPageController", NewPageController)
            .controller("EditPageController", EditPageController);

        function PageListController($routeParams, PageService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            function generatePages(){
                vm.pages = PageService.findPageByWebsiteId(webId);
            }
            generatePages();
        }

        function EditPageController($routeParams, PageService, $location) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            var pageId = parseInt($routeParams.pid);
            vm.pageId = pageId;

            vm.updatePage = updatePage;
            vm.deletePage = deletePage;

            function generatePage(){
                vm.page = PageService.findPageById(pageId);
            }
            generatePage();

            function updatePage(pageId, page) {
                var newPage = PageService.updatePage(pageId, page);
                $location.url("/user/" + userId + "/website/" + webId + "/page");
            }

            function deletePage() {
                PageService.deletePage(pageId);
                $location.url("/user/" + userId + "/website/" + webId + "/page");
            }
        }

        function NewPageController($routeParams, PageService, $location) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            vm.createPage = createPage;

            function createPage(webId, page) {
                var newPage = PageService.createPage(webId, page);
                $location.url("/user/" + userId + "/website/" + webId + "/page");
            }
        }
    }
)();