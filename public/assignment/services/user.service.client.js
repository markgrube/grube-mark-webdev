(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
            {username: 'bjergsen', password: 'ewq', _id: 123, first: 'Soren', last: 'Bjerg', email: 'bjergsen@tsm.gg'},
            {
                username: 'doublelift',
                password: 'ewq',
                _id: 234,
                first: 'Yilian',
                last: 'Peng',
                email: 'doublelift@tsm.gg'
            },
            {username: 'dyrus', password: 'ewq', _id: 345, first: 'Marcus', last: 'Hill', email: 'dyrus@tsm.gg'}
        ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            deleteUser: deleteUser
        };
        return api;

        function findUserById(userId) {
            for (var u in users) {
                user = users[u];
                if (user._id === userId) {
                    return user;
                }
            }
            return null
        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                user = users[u];
                if (user.username === username
                    && user.password === password) {
                    return user
                }
            }
            return null
        }

        function createUser(user) {
            const lastIndex = users[users.length - 1]._id;

            user._id = lastIndex + 1;
            users.push(user);

            return user
        }

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
            user._id = userId;

            for (var u in users) {
                if (users[u]._id === userId) {
                    users[u] = user;
                    return 0;
                }
            }
            return 1;
        }

        function deleteUser(userId) {
            for (var u in users) {
                if (users[u]._id === userId) {
                    users.splice(u, 1);
                    return 0;
                }
            }
            return 1;
        }
    }
})();