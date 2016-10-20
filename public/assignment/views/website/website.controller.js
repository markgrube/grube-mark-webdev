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

        function NewWebsiteController($routeParams, WebsiteService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            function generateWebsites(){
                vm.websites = WebsiteService.findWebsitesByUser(userId)
            }
            generateWebsites();
        }

        function EditWebsiteController($routeParams, WebsiteService) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            function generateWebsites(){
                vm.websites = WebsiteService.findWebsitesByUser(userId)
            }
            generateWebsites();
        }
    }
)();