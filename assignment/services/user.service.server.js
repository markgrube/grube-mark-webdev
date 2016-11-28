var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require("bcrypt-nodejs");

module.exports = function (app, model) {

    app.post('/api/user', createUser);
    app.get('/api/user', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);
    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/logout', logout);
    app.post('/api/register', register);

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser); //store user data in the session
    passport.deserializeUser(deserializeUser); //fetch object and then attach it to the request object as req.user

    function localStrategy(username, password, done) {
        model
            .userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    if(user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function register (req, res) {
        var user = req.body;
        var username = user.username;
        user.password = bcrypt.hashSync(user.password);
        model
            .userModel
            .findUserByUsername(username)
            .then (
                function(user) {
                    if (user) {
                        res.sendStatus(400).send("Username already taken");
                    } else {
                        return model.userModel.createUser(req.body)
                    }
                },
                function(error) {
                    res.sendStatus(400).send(error);
                })
            .then (
                function(user) {
                    if(user) {
                        req.login(user, function(err) {
                            if(err) {
                                res.sendStatus(400).send(err);
                            } else {
                                res.json(user);
                            }
                        })
                    }
                }
            )
    }

    function serializeUser(user, done) {
        delete user.password;
        done(null, user);
    }

    function deserializeUser(user, done) {
        model
            .userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function login(req, res) {
        var user = req.user;
        if (user != null){
            delete user.password;
            res.json(user);
        }
        else
        {
            res.sendStatus(404);
        }
    }

    function logout(req, res) {
        req.logOut();
        res.sendStatus(200);
    }

    function createUser(req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        model
            .userModel
            .createUser(user)
            .then(
                function (newUser) {
                    res.send(newUser);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
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
        model
            .userModel
            .findUserByUsername(username)
            .then(
                function (response) {
                    res.json(response);
                },
                function (err)  {
                    res.send(err);
                }
            );
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        model
            .userModel
            .findUserByCredentials(username, password)
            .then(
                function (response) {
                    res.json(response);
                },
                function (err)  {
                    res.send(err);
                }
            );
    }

    function findUserById(req, res) {
        var userId = req.params.uid;
        model
            .userModel
            .findUserById(userId)
            .then(
                function (response) {
                    res.json(response);
                },
                function (err)  {
                    res.send(err);
                }
            );
    }

    function updateUser(req, res) {
        var user = req.body;
        var uid = req.params.uid;
        model
            .userModel
            .updateUser(uid, user)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function deleteUser(req, res) {
        var uid = req.params.uid;
        model
            .userModel
            .deleteUser(uid)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }
};