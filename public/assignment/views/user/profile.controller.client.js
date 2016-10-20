(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        var userId = parseInt($routeParams.uid);
        vm.uid = userId;
        vm.updateUser = updateUser;

        var user = UserService.findUserById(userId);
        if (user != null) {
            vm.user = user;
        }

        function updateUser(userId, user) {
            UserService.updateUser(userId, user);
        }

    }
})();