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
    app.get('/api/user?username=username', findUserByUsername);
    app.get('/api/user?username=username&password=password', findUserByCredentials);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    function createUser(req, res){}
    function findUserByUsername(req, res){}
    function findUserByCredentials(req, res){}
    function findUserById(req, res){}
    function updateUser(req, res){}
    function deleteUser(req, res){}
};