(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            // createUser: createUser,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            deleteUser: deleteUser,
            login: login,
            logout: logout,
            register: register
        };
        return api;

        function findUserById(userId) {
            var url = '/api/user/'+userId;
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
            var url = '/api/user?username='+username+'&password='+password;
            return $http.get(url);
        }

        // function createUser(user) {
        //     return $http.post("/api/user", user);
        // }

        function findUserByUsername(username) {
            for (var u in users) {
                user = users[u];
                if (user.username === username) {
                    return user;
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;
            return $http.put(url, user);
        }

        function deleteUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);
        }

        function login(username, password){
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/login", user);
        }

        function logout() {
            return $http.post("/api/logout");
        }

        function register(user) {
            var user = {
                username: user.username,
                password: user.password
            };
            return $http.post("/api/register", user);
        }
    }
})();