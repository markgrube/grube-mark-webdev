(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(username, password){
            var user = UserService.findUserByCredentials(username, password);
            if (user === null) {
                vm.error = "User not found";
            }
            else {
                $location.url("/user/" + user._id);
            }
        }
    }
})();