module.exports = function(){

    var model = {};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
    return api;

    function createUser (user) {
        return UserModel.create(user);
    }

    function findUserById(id) {
        return UserModel.findById(id);
    }

    function updateUser(id, user) {
        return UserModel
            .update(
                {
                    _id: id
                },
                {
                    first: user.first,
                    last: user.last,
                    email: user.email
                }
            );
    }

    function findUserByUsername(username) {
        return UserModel.findOne({
            username: username
        });
    }

    function findUserByCredentials(username, password) {
        return UserModel.findOne({
            username: username,
            password: password
        });
    }

    function deleteUser(id) {
        return UserModel.remove({_id: id});
    }
};