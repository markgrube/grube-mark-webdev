(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService, $location) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.uid = userId;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        vm.logout = logout;

        function init() {
            UserService
                .findUserById(userId)
                .success(function (user) {
                    if (user != "") {
                        vm.user = user;
                    }
                })
                .error(function (){
                    console.log("No user found.")
                });
        }
        init();

        function updateUser() {
            UserService
                .updateUser(vm.uid, vm.user)
                .success(function (user) {
                    $location.url("/user/" + uid)
                })
                .error (function (){
                    console.log("Failed to update user.")
                });
        }

        function deleteUser() {
            UserService
                .deleteUser(vm.user._id)
                .success(function(){
                    $location.url("/login");
                })
                .error(function(){
                    console.log("Failed to unregister user.")
                });
        }

        function logout() {
            UserService
                .logout()
                .success(function () {
                    $location.url("/login")
                })
        }

    }
})();