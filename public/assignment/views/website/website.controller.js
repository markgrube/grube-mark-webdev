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
                WebsiteService
                    .findWebsitesByUser(userId)
                    .success(function(websites) {
                        vm.websites = websites;
                    })
                    .error(function (){
                        console.log("No websites found.")
                    });
            }
            generateWebsites();
        }

        function NewWebsiteController($routeParams, WebsiteService, $location) {
            var vm = this;

            var userId = parseInt($routeParams.uid);
            vm.userId = userId;

            vm.createWebsite = createWebsite;

            function generateWebsites(){
                WebsiteService
                    .findWebsitesByUser(vm.userId)
                    .success(function(websites) {
                        vm.websites = websites;
                    })
                    .error(function (){
                        console.log("No websites found.")
                    });
            }
            generateWebsites();

            function createWebsite(website) {
                WebsiteService
                    .createWebsite(vm.userId, website)
                    .success(function() {
                        $location.url('/user/'+vm.userId+'/website');
                    })
                    .error(function (){
                        console.log("Failed to create Website.")
                    });
                $location.url('/user/'+userId+'/website');
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
                WebsiteService
                    .findWebsitesByUser(userId)
                    .success(function(websites) {
                        vm.websites = websites;
                    })
                    .error(function (){
                        console.log("No websites found.")
                    });
            }
            generateWebsites();

            function generateWebsite(){
                WebsiteService
                    .findWebsiteById(webId)
                    .success(function(website) {
                        vm.website = website;
                    })
                    .error(function (){
                        console.log("No website found.")
                    });
            }
            generateWebsite();

            function updateWebsite() {
                WebsiteService
                    .updateWebsite(vm.webId, vm.website)
                    .success(function() {
                        $location.url('/user/'+userId+'/website');
                    })
                    .error(function (){
                        console.log("Failed to update website.")
                    });
                $location.url('/user/'+userId+'/website');
            }

            function deleteWebsite() {
                WebsiteService
                    .deleteWebsite(webId)
                    .success(function() {
                        $location.url('/user/'+userId+'/website');
                    })
                    .error(function (){
                        console.log("Failed to delete website.")
                    });
            }
        }
    }
)();