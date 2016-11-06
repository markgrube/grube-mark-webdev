(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;

        function register(user){
            if(vm.password === vm.verifyPassword){
                UserService
                    .createUser(user)
                    .success(function(user){
                        $location.url("/user/"+user._id);
                    })
                    .error(function(){
                        console.log("Failed to create user.")
                    });
            }
            else {
                vm.error = "Passwords do not match";
            }
        }
    }
})();