(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;

        function register(user){
            if(vm.username === ""){
                vm.error = "Username is required";
            } else if (vm.password === vm.verifyPassword){
                UserService
                    .register(user)
                    .success(function(user){
                        $location.url("/user/"+user._id);
                    })
                    .error(function(){
                        vm.error = "Username already taken";
                        console.log("Failed to create user.")
                    });
            } else {
                vm.error = "Passwords do not match";
            }
        }
    }
})();