(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;

        function register(user){
            if(vm.password === vm.verifyPassword){
                var registeredUser = UserService.createUser(user);
                $location.url("/user/" + registeredUser._id);
            }
            else {
                vm.error = "Passwords do not match";
            }
        }
    }
})();