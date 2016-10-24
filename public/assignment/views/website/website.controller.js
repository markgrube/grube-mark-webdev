(function() {
        angular
            .module("WebAppMaker")
            .controller("WebsiteListController", WebsiteListController)
            .controller("NewWebsiteController", NewWebsiteController)
            .controller("EditWebsiteController", EditWebsiteController);

        function WebsiteListController($routeParams, WebsiteService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            function generateWebsites(){
                vm.websites = WebsiteService.findWebsitesByUser(userId)
            }
            generateWebsites();
        }

        function NewWebsiteController($routeParams, WebsiteService, $location) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            vm.createWebsite = createWebsite;

            function generateWebsites(){
                vm.websites = WebsiteService.findWebsitesByUser(userId)
            }
            generateWebsites();

            function createWebsite(userId, website) {
                var newWebsite = WebsiteService.createWebsite(userId, website);
                $location.url("/user/" + userId + "/website/");
            }
        }

        function EditWebsiteController($routeParams, WebsiteService, $location) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            var webId = parseInt($routeParams.wid);
            vm.webId = webId;

            vm.updateWebsite = updateWebsite;
            vm.deleteWebsite = deleteWebsite;

            function generateWebsites(){
                vm.websites = WebsiteService.findWebsitesByUser(userId)
            }
            generateWebsites();

            function generateWebsite(){
                vm.website = WebsiteService.findWebsiteById(webId)
            }
            generateWebsite();

            function updateWebsite(webId, website) {
                var newWebsite = WebsiteService.updateWebsite(webId, website);
                $location.url("/user/" + userId + "/website/");
            }

            function deleteWebsite() {
                WebsiteService.deleteWebsite(webId);
                $location.url("/user/" + userId + "/website/");
            }
        }
    }
)();