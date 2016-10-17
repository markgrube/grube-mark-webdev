(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($scope) {
        $scope.name = "hello";
    }
})();