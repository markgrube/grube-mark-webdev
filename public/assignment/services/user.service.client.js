(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
            {username: 'bjergsen', password: 'ewq', _id: 123, first: 'Soren', last: 'Bjerg', email: 'bjergsen@tsm.gg'},
            {username: 'doublelift', password: 'ewq', _id: 234, first: 'Yilian', last: 'Peng', email: 'doublelift@tsm.gg'},
            {username: 'dyrus', password: 'ewq', _id: 345, first: 'Marcus', last: 'Hill', email: 'dyrus@tsm.gg'}
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