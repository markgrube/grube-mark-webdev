(function() {
        angular
            .module("WebAppMaker")
            .controller("WebsiteListController", WebsiteListController);

        function WebsiteListController($scope) {

            var websites = [
                {"_id": 123, "name": "Address Book App"},
                {"_id": 234, "name": "Blogger"},
                {"_id": 345, "name": "Blogging App"},
                {"_id": 456, "name": "Script Testing App"}
            ]

            $scope.websites = websites;
        }
    }
)();