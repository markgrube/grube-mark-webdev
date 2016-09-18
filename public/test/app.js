module.exports = function(app)
{
    app.get("/api/test", findAllMessages);
    app.post("/api/test", createMessage);
    app.delete("/api/test/:id", deleteMessage);

    // var connectionString = 'mongodb://localhost:27017/test';
    // if(process.env.MLAB_DB_USERNAME) {
    //     connectionString = process.env.MLAB_DB_URL_INIT +
    //         process.env.MLAB_DB_USERNAME + ":" +
    //         process.env.MLAB_DB_PASSWORD +
    //         process.env.MLAB_DB_URL_END + '/' +
    //         process.env.MLAB_DB_NAME;
    // }
    var connectionString = 'mongodb://heroku_4gqgl0ms:565k7fbhk8lcs4i08a9brk0i3e@ds033096.mlab.com:33096/heroku_4gqgl0ms'
    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var TestSchema = mongoose.Schema({
        message: String
    })

    var TestModel = mongoose.model("TestModel", TestSchema);
}

(function() {
    angular
        .module("TestApp", [])
        .controller("TestController", TestController)
        .filter('reverse', function() {
            return function(items) {
                return items.slice().reverse();
            };
        });

    function TestController($http) {
        var vm = this;
        vm.createMessage = createMessage;
        vm.deleteMessage = deleteMessage;

        function init() {
            findAllMessages();
        }
        init();

        function createMessage(message) {
            vm.message = "";
            var obj = {
                message: message
            };
            $http.post("/api/test", obj)
                .then(
                    findAllMessages,
                    function(err) {
                        vm.error = err;
                    }
                );
        }

        function deleteMessage(message) {
            $http.delete("/api/test/" + message._id)
                .then(
                    findAllMessages,
                    function(err) {
                        vm.error = err;
                    }
                );
        }

        function findAllMessages() {
            $http.get("/api/test")
                .then(
                    function(response) {
                        vm.messages = response.data;
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
    }
})();