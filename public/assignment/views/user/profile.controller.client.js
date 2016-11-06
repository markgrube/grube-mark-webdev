(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService, $location) {
        var vm = this;
        var userId = parseInt($routeParams.uid);
        vm.uid = userId;
        vm.updateUser = updateUser;

        function init() {
            UserService
                .findUserById(userId)
                .success(function (user) {
                    if (user != '0') {
                        vm.user = user;
                    }
                })
                .error(function (){

                });
        }
        init();

        function updateUser() {
            UserService
                .updateUser(vm.uid, vm.user)
                .success(function (user) {
                    $location.url("/user/" + user._id)
                })
                .error (function (){

                });
        }


    }
})();