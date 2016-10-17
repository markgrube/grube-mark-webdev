(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
            {username: 'bjergsen', password: 'ewq', _id: 123, first: 'Soren', last: 'Bjerg'},
            {username: 'doublelift', password: 'ewq', _id: 234, first: 'Yilian', last: 'Peng'},
            {username: 'dyrus', password: 'ewq', _id: 345, first: 'Marcus', last: 'Hill'}
        ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById
        };
        return api;

        function findUserById(userId) {
            for(var u in users) {
                user = users[u];
                if(user._id === userId) {
                    return user;
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for(var u in users) {
                user = users[u];
                if(    user.username === username
                    && user.password === password) {
                    return user;
                }
            }
            return null;
        }
    }
})();