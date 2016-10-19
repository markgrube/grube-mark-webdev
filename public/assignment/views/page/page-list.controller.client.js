(function() {
        angular
            .module("WebAppMaker")
            .controller("PageListController", PageListController);

        function PageListController($scope) {

            var pages = [
                {"_id": 123, "name": "Blog Post"},
                {"_id": 234, "name": "Blogs"},
                {"_id": 345, "name": "Home"},
                {"_id": 456, "name": "About"},
                {"_id": 456, "name": "Contact Us"}
            ]

            $scope.pages = pages;
        }
    }
)();