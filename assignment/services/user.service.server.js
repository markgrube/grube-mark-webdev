/**
 * Created by Mark on 11/5/2016.
 */
module.exports = function (app) {
    var users = [
        {username: 'bjergsen', password: 'ewq', _id: 001, first: 'Soren', last: 'Bjerg', email: 'bjergsen@tsm.gg'},
        {username: 'doublelift', password: 'ewq', _id: 002, first: 'Yilian', last: 'Peng', email: 'doublelift@tsm.gg'},
        {username: 'dyrus', password: 'ewq', _id: 003, first: 'Marcus', last: 'Hill', email: 'dyrus@tsm.gg'}
    ];

    app.post('/api/user', createUser);
    app.get('/api/user', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    function createUser(req, res) {
        var user = req.body;
        user._id = (new Date()).getTime();
        users.push(user);
        res.send(user);
    }

    function findUser(req, res) {
        var query = req.query;
        if (query.password && query.username){
            findUserByCredentials(req, res);
        } else if (query.username){
            findUserByUsername(req, res);
        }
    }

    function findUserByUsername(req, res) {
        var username = req.query.username;
        for (var u in users) {
            if (users[u].username === username) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        for (var u in users) {
            if (users[u].username === username && users[u].password === password) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    function findUserById(req, res) {
        var userId = parseInt(req.params.uid);
        for (var u in users) {
            if (users[u]._id === userId ) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    function updateUser(req, res) {
        var user = req.body;
        var uid = parseInt(req.params.uid);
        for (var u in users) {
            if (users[u]._id === uid) {
                users[u] = user;
                return;
            }
        }
        res.send('200');
    }

    function deleteUser(req, res) {
        var uid = req.params.uid;
        for (var i=0; i < users.length; i++) {
            if (users[i]._id == uid) {
                users.splice(i, 1);
            }
        }
        res.send('200');
    }
};