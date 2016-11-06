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
                PageService
                    .findPageByWebsiteId(vm.webId)
                    .success(function(pages) {
                        vm.pages = pages;
                    })
                    .error(function(){
                        console.log("No pages found.");
                    });
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
                PageService
                    .findPageById(pageId)
                    .success(function(page) {
                        if(page != '0') {
                            vm.page = page;
                        }
                    })
                    .error(function(){
                        console.log("Page not found.");
                    });
            }
            generatePage();

            function updatePage(pageId, page) {
                PageService
                    .updatePage(vm.pageId, vm.page)
                    .success(function() {
                        $location.url('/user/'+userId+'/website/'+webId+'/page');
                    })
                    .error(function(){
                        console.log("Failed to update page.");
                    });
            }

            function deletePage() {
                PageService
                    .deletePage(pageId)
                    .success(function () {
                        $location.url('/user/'+userId+'/website/'+webId+'/page');
                    })
                    .error(function(){
                        console.log("Failed to delete page.");
                    });
            }
        }

        function NewPageController($routeParams, PageService, $location) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            vm.createPage = createPage;

            function createPage(page) {
                PageService
                    .createPage(vm.webId, page)
                    .success(function (page) {
                        $location.url('/user/' + userId + '/website/' + webId + '/page');
                    })
                    .error(function () {
                        console.log("Failed to create page.");
                    });
            }
        }
    }
)();